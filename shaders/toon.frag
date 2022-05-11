#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 toon = texture(image, texcoord);
    toon.r = round(toon.r * 4.0) / 4.0;
    toon.g = round(toon.g * 4.0) / 4.0;
    toon.b = round(toon.b * 4.0) / 4.0;
    FragColor = toon;
}
