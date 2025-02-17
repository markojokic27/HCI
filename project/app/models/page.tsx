"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";
import * as React from "react";
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { Accordion } from "radix-ui";
import { Icon } from "@/components/Icon";
import Image from "next/image";
import dynamic from "next/dynamic";
// ✅ Disable SSR for this component
const CustomItemPage = dynamic(() => Promise.resolve(PageComponent), {
  ssr: false,
});

type ModelProps = {
  scene: THREE.Object3D;
};

const Model = ({ scene }: ModelProps) => {
  return <primitive object={scene} />;
};

const PageComponent = () => {
  const { scene } = useGLTF("/walletFinal.glb"); // ✅ Ensure this is inside `public/`

  return (
    <Layout className="py-20 lg:py-32">
      <LayoutRow>
        <LayoutColumn className="h-[50vh]" lgSpan={6}>
          <Canvas camera={{ position: [0, 1, 3], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            <Suspense fallback={null}>
              <Model scene={scene} />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </LayoutColumn>
        <LayoutColumn lgSpan={6}>
          <Accordion.Root
            className="rounded-xl bg-orange-25"
            type="single"
            collapsible
          >
            {custom_wallet.customizableParts.map((part) => (
              <Accordion.Item
                className="AccordionItem"
                value={part.name}
                key={part.name}
              >
                <Accordion.Trigger
                  key={part.name}
                  className="group flex w-full items-center justify-between border border-orange-800 bg-orange-25 p-4 text-left text-md outline-none"
                >
                  <p>
                    {part.name.charAt(0).toUpperCase() + part.name.slice(1)}
                  </p>
                  <Icon
                    name="chevronDown"
                    className="scale-150 transition-transform duration-300 group-data-[state=open]:rotate-180"
                  />
                </Accordion.Trigger>
                <Accordion.Content className="AccordionContent">
                  <Accordion.Root type="single" collapsible>
                    {part.subparts.map((subpart) => (
                      <Accordion.Item
                        value={subpart.subPartName}
                        key={subpart.subPartName}
                      >
                        <Accordion.Trigger className="w-full border border-orange-25 bg-orange-200 p-3 text-left text-md outline-none">
                          {subpart.subPartName}
                        </Accordion.Trigger>

                        <Accordion.Content className="AccordionContent2 flex flex-wrap">
                          {subpart.colors.map((color) => (
                            <button
                              className="m-3 active:scale-95"
                              key={color.name}
                              onClick={() =>
                                adjustMeshHSV(subpart.meshNames, color, scene)
                              }
                            >
                              <Image
                                width={64}
                                height={64}
                                className="h-8 w-8 rounded-1"
                                src={color.iconUrl}
                                alt={color.name}
                              />
                            </button>
                          ))}
                        </Accordion.Content>
                      </Accordion.Item>
                    ))}
                  </Accordion.Root>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </LayoutColumn>
      </LayoutRow>
    </Layout>
  );
};

export default CustomItemPage;

const black_s = {
  name: "Black",
  iconUrl: "/pictures/colors-mini/black_s3.jpg",
  url: "/pictures/textures/black_s.jpeg",
  hue: 1.0,
  saturation: 1,
  value: 0,
};

const red_s = {
  name: "Red",
  iconUrl: "/pictures/colors-mini/red_s.jpeg",
  url: "/pictures/textures/red_s.jpeg",
  hue: 0.48,
  saturation: 1.1,
  value: 1.2,
};

const blue_s = {
  name: "Blue",
  iconUrl: "/pictures/colors-mini/blue_s.jpeg",
  url: "/pictures/textures/blue_s.jpeg",
  hue: 0.15,
  saturation: 1.6,
  value: 1,
};

const lblue_s = {
  name: "Light Blue",
  iconUrl: "/pictures/colors-mini/lblue_s.jpeg",
  url: "/pictures/textures/lblue_s.jpeg",
  hue: 0.05,
  saturation: 1,
  value: 1.3,
};

const brown_s = {
  name: "Brown",
  iconUrl: "/pictures/colors-mini/brown_s.jpeg",
  url: "/pictures/textures/brown_s.jpeg",
  hue: 0.59,
  saturation: 1.9,
  value: 0.1,
};

const brown_s2 = {
  name: "Brown",
  iconUrl: "/pictures/colors-mini/brown_s2.jpeg",
  url: "/pictures/textures/brown_s2.jpeg",
  hue: 0.6,
  saturation: 1.9,
  value: 0.3,
};

const lbrown_s = {
  name: "Light Brown",
  iconUrl: "/pictures/colors-mini/lbrown_s.jpeg",
  url: "/pictures/textures/lbrown_s.jpeg",
  hue: 0.6,
  saturation: 1.9,
  value: 0.5,
};

const orange_s = {
  name: "Orange",
  iconUrl: "/pictures/colors-mini/orange_s.jpeg",
  url: "/pictures/textures/orange_s.jpeg",
  hue: 0.57,
  saturation: 2,
  value: 2,
};

const beige_s = {
  name: "Beige",
  iconUrl: "/pictures/colors-mini/beige_s.jpeg",
  url: "/pictures/textures/beige_s.jpeg",
  hue: 0.57,
  saturation: 0.9,
  value: 1.2,
};

const purple_s = {
  name: "Purple",
  iconUrl: "/pictures/colors-mini/purple_s.jpeg",
  url: "/pictures/textures/purple_s.jpeg",
  hue: 0.3,
  saturation: 0.8,
  value: 1.3,
};

const green_s = {
  name: "Green",
  iconUrl: "/pictures/colors-mini/green_s.jpeg",
  url: "/pictures/textures/green_s.jpeg",
  hue: 0.89,
  saturation: 1.5,
  value: 0.4,
};

const green_s3 = {
  name: "Green v2",
  iconUrl: "/pictures/colors-mini/green_s3.jpeg",
  url: "/pictures/textures/green_s3.jpeg",
  hue: 0.89,
  saturation: 1.5,
  value: 0.1,
};

const green_s4 = {
  name: "Green v3",
  iconUrl: "/pictures/colors-mini/green_s4.jpeg",
  url: "/pictures/textures/green_s4.jpeg",
  hue: 0.85,
  saturation: 1.5,
  value: 0.4,
};

const lgreen_s = {
  name: "Light Green",
  iconUrl: "/pictures/colors-mini/lgreen_s.jpeg",
  url: "/pictures/textures/lgreen_s.jpeg",
  hue: 0.77,
  saturation: 1,
  value: 1,
};

const white_s = {
  name: "White",
  iconUrl: "/pictures/colors-mini/white_s.jpeg",
  url: "/pictures/textures/white_s.jpeg",
  hue: 0.6,
  saturation: 0.6,
  value: 1.3,
};

const white_s2 = {
  name: "White v2",
  iconUrl: "/pictures/colors-mini/white_s2.jpg",
  url: "/pictures/textures/white_s2.jpeg",
  hue: 0.05,
  saturation: 0,
  value: 1.3,
};

const yellow_s = {
  name: "Yellow",
  iconUrl: "/pictures/colors-mini/yellow_s.jpeg",
  url: "/pictures/textures/yellow_s.jpeg",
  hue: 0.64,
  saturation: 2,
  value: 2.3,
};

const yellow_s2 = {
  name: "Yellow v2",
  iconUrl: "/pictures/colors-mini/yellow_s2.jpeg",
  url: "/pictures/textures/yellow_s2.jpeg",
  hue: 0.6,
  saturation: 0.9,
  value: 1.8,
};

const white_l = {
  name: "White",
  iconUrl: "/pictures/colors-mini/white_l.jpg",
  url: "/pictures/colors-mini/white_l.jpg",
  hue: 0.6,
  saturation: 0,
  value: 4.8,
};

const blue_l = {
  name: "Blue",
  iconUrl: "/pictures/colors-mini/blue_l.jpg",
  url: "/pictures/colors-mini/blue_l.jpg",
  hue: 0.6,
  saturation: 1,
  value: 0.8,
};

const red_l = {
  name: "Red",
  iconUrl: "/pictures/colors-mini/red_l.jpg",
  url: "/pictures/colors-mini/red_l.jpg",
  hue: 0.95,
  saturation: 1.2,
  value: 0.9,
};

const olive_l = {
  name: "Olive",
  iconUrl: "/pictures/colors-mini/olive_l.jpg",
  url: "/pictures/colors-mini/red_l.jpg",
  hue: 0.05,
  saturation: 0.85,
  value: 1,
};

const olive_l2 = {
  name: "Olive v2",
  iconUrl: "/pictures/colors-mini/olive_l2.jpg",
  url: "/pictures/colors-mini/red_l.jpg",
  hue: 0.1,
  saturation: 0.85,
  value: 0.5,
};

const orange_l = {
  name: "Orange",
  iconUrl: "/pictures/colors-mini/orange_l.jpg",
  url: "/pictures/colors-mini/red_l.jpg",
  hue: 0.95,
  saturation: 2,
  value: 2.5,
};

const lorange_l = {
  name: "Light Orange",
  iconUrl: "/pictures/colors-mini/lorange_l.jpg",
  url: "/pictures/colors-mini/red_l.jpg",
  hue: 0.975,
  saturation: 1.1,
  value: 2.2,
};

const orange_l2 = {
  name: "Orange v2",
  iconUrl: "/pictures/colors-mini/orange_l2.jpg",
  url: "/pictures/colors-mini/red_l.jpg",
  hue: 0.975,
  saturation: 1.05,
  value: 1.9,
};

const lbrown_l = {
  name: "Light Brown",
  iconUrl: "/pictures/colors-mini/lbrown_l.jpg",
  url: "/pictures/colors-mini/red_l.jpg",
  hue: 0,
  saturation: 1,
  value: 1.5,
};

const brown_l = {
  name: "Brown",
  iconUrl: "/pictures/colors-mini/brown_l.jpg",
  url: "/pictures/colors-mini/red_l.jpg",
  hue: 0.925,
  saturation: 1.3,
  value: 0.35,
};

const brown_l2 = {
  name: "Brown v2",
  iconUrl: "/pictures/colors-mini/brown_l2.jpg",
  url: "/pictures/colors-mini/red_l.jpg",
  hue: 1,
  saturation: 1,
  value: 0.7,
};

const purple_l = {
  name: "Purple",
  iconUrl: "/pictures/colors-mini/purple_l.jpg",
  url: "/pictures/colors-mini/red_l.jpg",
  hue: 0.7,
  saturation: 1.8,
  value: 0.189,
};

const dpurple_l = {
  name: "Dark Purple",
  iconUrl: "/pictures/colors-mini/dpurple_l.jpg",
  url: "/pictures/colors-mini/red_l.jpg",
  hue: 0.75,
  saturation: 1.9,
  value: 0.1,
};

const yellow_l = {
  name: "Yellow",
  iconUrl: "/pictures/colors-mini/yellow_l.jpg",
  url: "/pictures/colors-mini/red_l.jpg",
  hue: 0.05,
  saturation: 2,
  value: 1.9,
};
const custom_wallet = {
  img1_url: "/pictures/product-images/cardholder1.png",
  img2_url: "/pictures/product-images/cardholder2.png",
  name: "Custom wallet",
  price: 500,
  customizableParts: [
    {
      name: "pockets",
      subparts: [
        {
          subPartName: "All",
          colors: [
            orange_l2,
            white_l,
            red_l,
            blue_l,
            olive_l,
            olive_l2,
            orange_l,
            lorange_l,
            lbrown_l,
            brown_l,
            brown_l2,
            yellow_l,
            purple_l,
            dpurple_l,
          ],
          pickedColor: null,
          meshNames: [
            "pocket1_left",
            "pocket2_left",
            "pocket3_left",
            "pocket4_left",
            "pocket1_right",
            "pocket2_right",
            "pocket3_right",
            "pocket4_right",
          ],
        },
        {
          subPartName: "Top",
          colors: [
            orange_l2,
            white_l,
            red_l,
            blue_l,
            olive_l,
            olive_l2,
            orange_l,
            lorange_l,
            lbrown_l,
            brown_l,
            brown_l2,
            yellow_l,
            purple_l,
            dpurple_l,
          ],
          pickedColor: lbrown_l,
          meshNames: ["pocket1_left", "pocket1_right"],
        },
        {
          subPartName: "Upper",
          colors: [
            orange_l2,
            white_l,
            red_l,
            blue_l,
            olive_l,
            olive_l2,
            orange_l,
            lorange_l,
            lbrown_l,
            brown_l,
            brown_l2,
            yellow_l,
            purple_l,
            dpurple_l,
          ],
          pickedColor: lbrown_l,
          meshNames: ["pocket2_left", "pocket2_right"],
        },
        {
          subPartName: "Middle",
          colors: [
            orange_l2,
            white_l,
            red_l,
            blue_l,
            olive_l,
            olive_l2,
            orange_l,
            lorange_l,
            lbrown_l,
            brown_l,
            brown_l2,
            yellow_l,
            purple_l,
            dpurple_l,
          ],
          pickedColor: lbrown_l,
          meshNames: ["pocket3_left", "pocket3_right"],
        },
        {
          subPartName: "Bottom",
          colors: [
            orange_l2,
            white_l,
            red_l,
            blue_l,
            olive_l,
            olive_l2,
            orange_l,
            lorange_l,
            lbrown_l,
            brown_l,
            brown_l2,
            yellow_l,
            purple_l,
            dpurple_l,
          ],
          pickedColor: lbrown_l,
          meshNames: ["pocket4_left", "pocket4_right"],
        },
      ],
    },
    {
      name: "leather",
      subparts: [
        {
          subPartName: "Outer",
          colors: [
            orange_l2,
            white_l,
            red_l,
            blue_l,
            olive_l,
            olive_l2,
            orange_l,
            lorange_l,
            lbrown_l,
            brown_l,
            brown_l2,
            yellow_l,
            purple_l,
            dpurple_l,
          ],
          pickedColor: lbrown_l,
          meshNames: ["backside"],
        },
        {
          subPartName: "Middle",
          colors: [
            orange_l2,
            white_l,
            red_l,
            blue_l,
            olive_l,
            olive_l2,
            orange_l,
            lorange_l,
            lbrown_l,
            brown_l,
            brown_l2,
            yellow_l,
            purple_l,
            dpurple_l,
          ],
          pickedColor: lbrown_l,
          meshNames: ["middle", "inside_strip"],
        },
      ],
    },
    {
      name: "stitches",
      subparts: [
        {
          subPartName: "Complete",
          colors: [
            white_s,
            white_s2,
            beige_s,
            blue_s,
            lblue_s,
            black_s,
            brown_s,
            brown_s2,
            lbrown_s,
            green_s,
            green_s3,
            green_s4,
            lgreen_s,
            red_s,
            orange_s,
            yellow_s2,
            yellow_s,
            purple_s,
          ],
          pickedColor: lblue_s,
          meshNames: [
            "stitches1",
            "stitches2",
            "stitches3",
            "stitches4",
            "stitches5",
            "stitches6",
            "stitches7",
            "stitches8",
            "stitches9",
            "stitches10",
            "stitches11",
            "stitches12",
            "stitches13",
            "stitches14",
          ],
        },
      ],
    },
  ],
};

function adjustMeshHSV(
  meshNames: string[],
  color: {
    name: string;
    iconUrl: string;
    url: string;
    hue: number;
    saturation: number;
    value: number;
  },
  object: THREE.Object3D,
) {
  meshNames.forEach((meshName) => {
    const mesh = object.getObjectByName(meshName) as THREE.Mesh;
    if (!mesh?.material || !(mesh.material as THREE.MeshBasicMaterial).map) {
      console.error("The mesh does not have a material with a texture map.");
      return;
    }

    if (meshName.includes("pocket")) {
      //("The string contains the word 'pocket'.");
      adjustOutlineHSV(object, color);
    }

    // Clone the existing material to avoid modifying the original
    const originalMaterial = mesh.material;
    const newMaterial = (originalMaterial as THREE.Material).clone();

    // Create shader material with HSV adjustment
    newMaterial.onBeforeCompile = function (shader) {
      shader.uniforms.hue = { value: color.hue };
      shader.uniforms.saturation = { value: color.saturation };
      shader.uniforms.value = { value: color.value };

      shader.fragmentShader = `
              uniform float hue;
              uniform float saturation;
              uniform float value;
  
              vec3 rgb2hsv(vec3 c) {
                  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
                  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
                  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
                  float d = q.x - min(q.w, q.y);
                  float e = 1.0e-10;
                  return vec3(abs((q.z + (q.w - q.y) / (6.0 * d + e))), d / (q.x + e), q.x);
              }
  
              vec3 hsv2rgb(vec3 c) {
                  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
                  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
                  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
              }
  
              ${shader.fragmentShader}
          `.replace(
        `#include <map_fragment>`,
        `
              #include <map_fragment>
              vec3 hsv = rgb2hsv(vec3(diffuseColor.r, diffuseColor.g, diffuseColor.b));
              hsv.x += hue;
              hsv.y *= saturation;
              hsv.z *= value;
              vec3 rgb = hsv2rgb(hsv);
              diffuseColor.rgb = rgb;
              `,
      );
    };

    mesh.material = newMaterial;
  });
}

function adjustOutlineHSV(
  object: THREE.Object3D,
  color: {
    name: string;
    iconUrl: string;
    url: string;
    hue: number;
    saturation: number;
    value: number;
  },
) {
  const meshNames = [
    "outline1",
    "outline2",
    "outline3",
    "outline4",
    "outline5",
    "outline6",
    "outline7",
    "outline8",
    "outline9",
    "outline10",
  ];

  meshNames.forEach((meshName) => {
    const mesh = object.getObjectByName(meshName) as THREE.Mesh;
    if (!mesh?.material || !(mesh.material as THREE.MeshBasicMaterial).map) {
      console.error("The mesh does not have a material with a texture map.");
      return;
    }

    // Clone the existing material to avoid modifying the original
    const originalMaterial = mesh.material;
    const newMaterial = (originalMaterial as THREE.Material).clone();

    // Create shader material with HSV adjustment
    newMaterial.onBeforeCompile = function (shader) {
      shader.uniforms.hue = { value: color.hue - 0.1 };
      shader.uniforms.saturation = { value: 2 };
      shader.uniforms.value = { value: 2 };

      shader.fragmentShader = `
              uniform float hue;
              uniform float saturation;
              uniform float value;
  
              vec3 rgb2hsv(vec3 c) {
                  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
                  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
                  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
                  float d = q.x - min(q.w, q.y);
                  float e = 1.0e-10;
                  return vec3(abs((q.z + (q.w - q.y) / (6.0 * d + e))), d / (q.x + e), q.x);
              }
  
              vec3 hsv2rgb(vec3 c) {
                  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
                  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
                  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
              }
  
              ${shader.fragmentShader}
          `.replace(
        `#include <map_fragment>`,
        `
              #include <map_fragment>
              vec3 hsv = rgb2hsv(vec3(diffuseColor.r, diffuseColor.g, diffuseColor.b));
              hsv.x += hue;
              hsv.y *= saturation;
              hsv.z *= value;
              vec3 rgb = hsv2rgb(hsv);
              diffuseColor.rgb = rgb;
              `,
      );
    };

    mesh.material = newMaterial;
  });
}
