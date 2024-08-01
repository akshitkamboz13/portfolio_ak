import React, { useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import * as Matter from 'matter-js';

const Skill = () => {
  useEffect(() => {
    const { Engine, Render, Runner, Common, MouseConstraint, Mouse, Composite, Bodies, Svg, Vertices } = Matter;

    // Create engine and world
    const engine = Engine.create();
    const world = engine.world;

    // Create renderer
    const render = Render.create({
      element: document.getElementById('canvas-container'),
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        background: 'transparent',
      }
    });

    Render.run(render);

    // Create runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // Function to add SVG shapes
    const addSvgShapes = (vertices, x, y) => {
      const color = Common.choose(['#f19648', '#f5d259', '#f55a3c', '#063e7b', '#ececd1']);
      const body = Bodies.fromVertices(x, y, vertices, {
        render: {
          fillStyle: color,
          strokeStyle: color,
          lineWidth: 1
        }
      });

      Composite.add(world, body);
    };

    // Load SVGs and add them to the canvas
    const loadSvgIcon = async (url, x, y) => {
      try {
        const response = await fetch(url);
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'image/svg+xml');
        const paths = doc.querySelectorAll('path');

        paths.forEach((path, i) => {
          const vertices = Vertices.scale(Svg.pathToVertices(path, 30), 0.4, 0.4);
          addSvgShapes(vertices, x + i * 150, y);
        });
      } catch (error) {
        console.error('Error loading SVG:', error);
      }
    };

    // Example SVG paths for demonstration
    loadSvgIcon('/path-to-your-svg-file.svg', 200, 200); // Replace with actual path to your SVG file

    // Add static edges
    Composite.add(world, [
      Bodies.rectangle(window.innerWidth / 2, 0, window.innerWidth, 50, { isStatic: true }),
      Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 50, { isStatic: true }),
      Bodies.rectangle(window.innerWidth, window.innerHeight / 2, 50, window.innerHeight, { isStatic: true }),
      Bodies.rectangle(0, window.innerHeight / 2, 50, window.innerHeight, { isStatic: true })
    ]);

    // Add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

    Composite.add(world, mouseConstraint);

    // Keep the mouse in sync with rendering
    render.mouse = mouse;

    // Fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: window.innerWidth, y: window.innerHeight }
    });

    // Clean up on component unmount
    return () => {
      Render.stop(render);
      Runner.stop(runner);
    };
  }, []);

  return (
    <div id="canvas-container" className="w-full h-screen bg-custom-blue">
      <div className="absolute top-5 left-5 text-white">
        <FaHtml5 size={40} className="mx-2" />
        <FaCss3Alt size={40} className="mx-2" />
        <FaJs size={40} className="mx-2" />
        <FaReact size={40} className="mx-2" />
      </div>
    </div>
  );
};

export default Skill;
