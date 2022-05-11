#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 custom = texture(image, texcoord);
    float L = (0.299 * custom.r) + (0.587 * custom.g) + (0.114 * custom.b);
    if (L < 0.05) {
        custom.r = 0.0;
        custom.g = 0.0;
        custom.b = 0.0;
    } else {
        float modifier = 8.0;
        custom.r = round(custom.r * modifier) / modifier;
        custom.g = round(custom.g * modifier) / modifier;
        custom.b = round(custom.b * modifier) / modifier;
    }
    vec4 color;
    float intensity = (custom.r + custom.g + custom.b) / 3.0;
    if(intensity > 0.95) {
        color = vec4(1.0,1.0,1.0,1.0);
    } else if(intensity > 0.75) {
        color = vec4(0.8,0.8,0.8,1.0);
    } else if(intensity > 0.50) {
        color = vec4(0.6,0.6,0.6,1.0);
    } else if(intensity > 0.25) {
        color = vec4(0.4,0.4,0.4,1.0);
    } else {
        color = vec4(0.0,0.0,0.0,1.0);
    }
    FragColor = custom * color;
}
