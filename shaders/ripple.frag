#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    /*
    This filter creates a ripple effect similar to dropping a pebble in a pond
    In order to accomplish a ripple effect, implement the following equations:
        scale and translate the texture coordinate such that it is in the range [-1.0, 1.0]
            multiple by 2, then subtracct 1
        calculate radius = magnitude of texture coordinate
        calculate a texture coordinate offset = texture_coordinate * (sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0
        calcualte final texture coordinate = original_texture_coordinate + texture_coordinate_offset
    */
    vec2 temp = texcoord * 2.0 - 1.0;
    float theta = atan(temp.y, temp.x);
    float radius = length(temp);
    vec2 offset = temp * (sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0;
    vec2 ripple = texcoord + offset;
    FragColor = texture(image, ripple);
}
