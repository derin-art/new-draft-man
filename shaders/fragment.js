const fragmentGlsl = `uniform vec4 uMouse; // xy = uv, z = movement, w = click
uniform vec3 uColor;
uniform sampler2D uTexture;
uniform float uTime;

varying vec2 vUv;

// simple random
float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

void main() {
  vec2 mouseUV = uMouse.xy;
  float movement = uMouse.x;
  float click = uMouse.w;

  vec2 uv = vUv;
  

  // distance from mouse
  float dist = distance(uv, mouseUV);

  // glitch influence area
  float influence = smoothstep(0.15, 0.0, dist);

  // noise for glitch
  float noise = random(vec2(uv.y * 2.0, uTime));

  // ✅ proper glitch strength
  float glitchStrength = influence * movement * 0.1;

  // only apply when moving
  glitchStrength *= step(0.001, movement);

  // horizontal glitch shift
  uv.x += (noise - 0.2) * glitchStrength;

  // RGB split
  float r = texture2D(uTexture, uv + vec2(glitchStrength, 0.0)).r;
  float g = texture2D(uTexture, uv).g;
  float b = texture2D(uTexture, uv - vec2(glitchStrength, 0.0)).b;

  vec3 glitchColor = vec3(r, g, b);

  // spotlight tint
  float spotlight = smoothstep(0.3, 0.0, dist);
  glitchColor += uColor  * 0.2;

  gl_FragColor = vec4(glitchColor, 1.0);
}`;

export default fragmentGlsl;
