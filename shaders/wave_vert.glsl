uniform float u_Frequency;
uniform float u_Time;

varying vec2 vUv;

void main()
{
    vUv = uv;

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.z += sin(modelPosition.x * u_Frequency - u_Time) * 0.05;
    modelPosition.z += sin(modelPosition.y * u_Frequency + u_Time) * 0.05;
    
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;

    // gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}