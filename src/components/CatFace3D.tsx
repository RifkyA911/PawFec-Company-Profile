import { useEffect, useRef } from 'react';

export default function CatFace3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Dynamic import of Three.js
    import('three').then(({ Scene, PerspectiveCamera, WebGLRenderer, Group, SphereGeometry, MeshStandardMaterial, Mesh, ConeGeometry, CylinderGeometry, AmbientLight, DirectionalLight, Color, TorusGeometry }) => {
      const container = containerRef.current;
      if (!container) return;

      // Scene setup
      const scene = new Scene();
      const camera = new PerspectiveCamera(75, 1, 0.1, 1000);
      camera.position.z = 4.5;

      const renderer = new WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(256, 256);
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      // Cat face group
      const catFace = new Group();

      // Main face (larger, more cat-like)
      const faceGeometry = new SphereGeometry(1.8, 64, 64);
      const faceMaterial = new MeshStandardMaterial({ 
        color: 0xe8794a,
        roughness: 0.6,
        metalness: 0.1
      });
      const face = new Mesh(faceGeometry, faceMaterial);
      face.scale.set(1, 0.9, 1);
      catFace.add(face);

      // Tabby stripes on face
      const stripeMaterial = new MeshStandardMaterial({ 
        color: 0xc2410c,
        roughness: 0.6,
        metalness: 0.1,
        transparent: true,
        opacity: 0.4
      });

      // Forehead stripes
      for (let i = 0; i < 3; i++) {
        const stripeGeometry = new TorusGeometry(0.3 + i * 0.15, 0.03, 8, 32, Math.PI);
        const stripe = new Mesh(stripeGeometry, stripeMaterial);
        stripe.position.set(0, 0.8 - i * 0.25, 1.6);
        stripe.rotation.x = Math.PI / 2;
        catFace.add(stripe);
      }

      // Cheek stripes
      for (let i = 0; i < 2; i++) {
        const stripeGeometry = new TorusGeometry(0.4 + i * 0.1, 0.03, 8, 32, Math.PI / 2);
        const stripe = new Mesh(stripeGeometry, stripeMaterial);
        stripe.position.set(-0.9 + i * 1.8, -0.3, 1.5);
        stripe.rotation.x = Math.PI / 2;
        stripe.rotation.z = i === 0 ? -Math.PI / 4 : Math.PI / 4;
        catFace.add(stripe);
      }

      // Left ear (larger, more triangular)
      const earGeometry = new ConeGeometry(0.6, 1.4, 32);
      const earMaterial = new MeshStandardMaterial({ 
        color: 0xe8794a,
        roughness: 0.6,
        metalness: 0.1
      });
      const leftEar = new Mesh(earGeometry, earMaterial);
      leftEar.position.set(-1.3, 1.5, 0);
      leftEar.rotation.z = -0.4;
      leftEar.rotation.x = 0.2;
      catFace.add(leftEar);

      // Right ear
      const rightEar = new Mesh(earGeometry, earMaterial);
      rightEar.position.set(1.3, 1.5, 0);
      rightEar.rotation.z = 0.4;
      rightEar.rotation.x = 0.2;
      catFace.add(rightEar);

      // Inner ears (larger)
      const innerEarGeometry = new ConeGeometry(0.35, 0.8, 32);
      const innerEarMaterial = new MeshStandardMaterial({ 
        color: 0xfcd34d,
        roughness: 0.7,
        metalness: 0.1
      });
      const leftInnerEar = new Mesh(innerEarGeometry, innerEarMaterial);
      leftInnerEar.position.set(-1.3, 1.4, 0);
      leftInnerEar.rotation.z = -0.4;
      leftInnerEar.rotation.x = 0.2;
      catFace.add(leftInnerEar);

      const rightInnerEar = new Mesh(innerEarGeometry, innerEarMaterial);
      rightInnerEar.position.set(1.3, 1.4, 0);
      rightInnerEar.rotation.z = 0.4;
      rightInnerEar.rotation.x = 0.2;
      catFace.add(rightInnerEar);

      // Left eye (larger, more almond-shaped)
      const eyeGeometry = new SphereGeometry(0.4, 32, 32);
      const eyeWhiteMaterial = new MeshStandardMaterial({ 
        color: 0xffffff,
        roughness: 0.2,
        metalness: 0.1
      });
      const leftEye = new Mesh(eyeGeometry, eyeWhiteMaterial);
      leftEye.position.set(-0.6, 0.4, 1.5);
      leftEye.scale.set(1.2, 1, 1);
      catFace.add(leftEye);

      // Right eye
      const rightEye = new Mesh(eyeGeometry, eyeWhiteMaterial);
      rightEye.position.set(0.6, 0.4, 1.5);
      rightEye.scale.set(1.2, 1, 1);
      catFace.add(rightEye);

      // Pupils (larger, more detailed)
      const pupilGeometry = new SphereGeometry(0.2, 32, 32);
      const pupilMaterial = new MeshStandardMaterial({ 
        color: 0x1f2937,
        roughness: 0.2,
        metalness: 0.1
      });
      const leftPupil = new Mesh(pupilGeometry, pupilMaterial);
      leftPupil.position.set(-0.6, 0.4, 1.75);
      leftPupil.scale.set(1, 1.3, 1);
      catFace.add(leftPupil);

      const rightPupil = new Mesh(pupilGeometry, pupilMaterial);
      rightPupil.position.set(0.6, 0.4, 1.75);
      rightPupil.scale.set(1, 1.3, 1);
      catFace.add(rightPupil);

      // Eye shine
      const shineGeometry = new SphereGeometry(0.08, 16, 16);
      const shineMaterial = new MeshStandardMaterial({ 
        color: 0xffffff,
        roughness: 0,
        metalness: 0.5
      });
      const leftShine = new Mesh(shineGeometry, shineMaterial);
      leftShine.position.set(-0.5, 0.5, 1.85);
      catFace.add(leftShine);

      const rightShine = new Mesh(shineGeometry, shineMaterial);
      rightShine.position.set(0.7, 0.5, 1.85);
      catFace.add(rightShine);

      // Nose (larger, more defined)
      const noseGeometry = new SphereGeometry(0.2, 32, 32);
      const noseMaterial = new MeshStandardMaterial({ 
        color: 0xfcd34d,
        roughness: 0.7,
        metalness: 0.1
      });
      const nose = new Mesh(noseGeometry, noseMaterial);
      nose.position.set(0, -0.15, 1.7);
      nose.scale.set(1.3, 0.9, 1);
      catFace.add(nose);

      // Mouth (more defined)
      const mouthGeometry = new CylinderGeometry(0.12, 0.12, 0.4, 32);
      const mouthMaterial = new MeshStandardMaterial({ 
        color: 0x1f2937,
        roughness: 0.4,
        metalness: 0.1
      });
      const leftMouth = new Mesh(mouthGeometry, mouthMaterial);
      leftMouth.position.set(-0.2, -0.6, 1.5);
      leftMouth.rotation.z = 0.6;
      catFace.add(leftMouth);

      const rightMouth = new Mesh(mouthGeometry, mouthMaterial);
      rightMouth.position.set(0.2, -0.6, 1.5);
      rightMouth.rotation.z = -0.6;
      catFace.add(rightMouth);

      // Whiskers (more, longer)
      const whiskerGeometry = new CylinderGeometry(0.025, 0.025, 1.2, 8);
      const whiskerMaterial = new MeshStandardMaterial({ 
        color: 0x1f2937,
        roughness: 0.4,
        metalness: 0.1
      });

      // Left whiskers
      for (let i = 0; i < 4; i++) {
        const whisker = new Mesh(whiskerGeometry, whiskerMaterial);
        whisker.position.set(-1.5, -0.2 + i * 0.2, 1.0);
        whisker.rotation.z = -0.35 + i * 0.12;
        catFace.add(whisker);
      }

      // Right whiskers
      for (let i = 0; i < 4; i++) {
        const whisker = new Mesh(whiskerGeometry, whiskerMaterial);
        whisker.position.set(1.5, -0.2 + i * 0.2, 1.0);
        whisker.rotation.z = 0.35 - i * 0.12;
        catFace.add(whisker);
      }

      // Cheeks (larger, more visible)
      const cheekGeometry = new SphereGeometry(0.3, 32, 32);
      const cheekMaterial = new MeshStandardMaterial({ 
        color: 0xfcd34d,
        roughness: 0.7,
        metalness: 0.1,
        transparent: true,
        opacity: 0.6
      });
      const leftCheek = new Mesh(cheekGeometry, cheekMaterial);
      leftCheek.position.set(-1.0, -0.5, 1.3);
      catFace.add(leftCheek);

      const rightCheek = new Mesh(cheekGeometry, cheekMaterial);
      rightCheek.position.set(1.0, -0.5, 1.3);
      catFace.add(rightCheek);

      // Chin
      const chinGeometry = new SphereGeometry(0.25, 32, 32);
      const chinMaterial = new MeshStandardMaterial({ 
        color: 0xfcd34d,
        roughness: 0.7,
        metalness: 0.1
      });
      const chin = new Mesh(chinGeometry, chinMaterial);
      chin.position.set(0, -1.0, 1.2);
      catFace.add(chin);

      scene.add(catFace);

      // Lighting (better setup)
      const ambientLight = new AmbientLight(0xffffff, 0.7);
      scene.add(ambientLight);

      const directionalLight = new DirectionalLight(0xffffff, 1.0);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      const fillLight = new DirectionalLight(0xffffff, 0.5);
      fillLight.position.set(-5, 3, 3);
      scene.add(fillLight);

      // Mouse tracking
      const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const rotateY = ((e.clientX - centerX) / rect.width) * 0.6;
        const rotateX = ((e.clientY - centerY) / rect.height) * 0.4;
        
        catFace.rotation.y = rotateY;
        catFace.rotation.x = -rotateX;
      };

      window.addEventListener('mousemove', handleMouseMove);

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      animate();

      // Cleanup
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        container.removeChild(renderer.domElement);
        renderer.dispose();
        faceGeometry.dispose();
        faceMaterial.dispose();
        earGeometry.dispose();
        earMaterial.dispose();
        innerEarGeometry.dispose();
        innerEarMaterial.dispose();
        eyeGeometry.dispose();
        eyeWhiteMaterial.dispose();
        pupilGeometry.dispose();
        pupilMaterial.dispose();
        shineGeometry.dispose();
        shineMaterial.dispose();
        noseGeometry.dispose();
        noseMaterial.dispose();
        mouthGeometry.dispose();
        mouthMaterial.dispose();
        whiskerGeometry.dispose();
        whiskerMaterial.dispose();
        cheekGeometry.dispose();
        cheekMaterial.dispose();
        chinGeometry.dispose();
        chinMaterial.dispose();
        stripeMaterial.dispose();
      };
    });
  }, []);

  return (
    <div ref={containerRef} className="relative w-64 h-64 mx-auto" />
  );
}
