import { useEffect } from "react";
import { Engine, Render, Runner, Bodies, Composite, MouseConstraint, Mouse, Events, Body } from "matter-js";
import "./css/Skills.css";

const Skills = () => {
  useEffect(() => {
    // Create engine
    const engine = Engine.create();
    const matterBox = document.querySelector(".matter-box");

    // Create renderer
    const render = Render.create({
      element: matterBox,
      engine,
      options: {
        width: matterBox.clientWidth,
        height: matterBox.clientHeight,
        wireframes: false,
        background: "transparent",
      },
    });

    // Ensure the canvas is properly resized and positioned
    function updateRenderSize() {
      render.canvas.width = matterBox.clientWidth;
      render.canvas.height = matterBox.clientHeight;
      render.options.width = matterBox.clientWidth;
      render.options.height = matterBox.clientHeight;
    }

    // Select pills
    const matterPill = document.querySelectorAll(".dm-matter-elem-pill");
    engine.world.gravity.y = 0.2;

    // Function to create pill shapes
    function createPills() {
      const centerX = matterBox.clientWidth / 2;
      const centerY = matterBox.clientHeight / 2;

      return Array.from(matterPill).map((matterPillElem) => {
        const pillWidth = matterPillElem.offsetWidth;
        const pillHeight = matterPillElem.offsetHeight;
        const pillRadius = pillHeight / 2;

        const leftCircle = Bodies.circle(
          centerX - pillWidth / 2 + pillRadius,
          centerY,
          pillRadius,
          {
            density: 0.01,
            friction: 0.1,
            frictionAir: 0.05,
            restitution: 0.5,
            render: { opacity: 0 },
          }
        );

        const rightCircle = Bodies.circle(
          centerX + pillWidth / 2 - pillRadius,
          centerY,
          pillRadius,
          {
            density: 0.01,
            friction: 0.1,
            frictionAir: 0.05,
            restitution: 0.5,
            render: { opacity: 0 },
          }
        );

        const rect = Bodies.rectangle(
          centerX,
          centerY,
          pillWidth - pillHeight,
          pillHeight,
          {
            density: 0.01,
            friction: 0.1,
            frictionAir: 0.05,
            restitution: 0.5,
            render: { opacity: 0 },
          }
        );

        const pillBody = Body.create({
          parts: [leftCircle, rightCircle, rect],
          friction: 0.1,
          restitution: 0.5,
          frictionAir: 0.05,
        });

        Composite.add(engine.world, pillBody);
        return pillBody;
      });
    }

    let elemPills = createPills();

    // Create boundaries
    function createBoundaries() {
      const ground = Bodies.rectangle(
        matterBox.clientWidth / 2,
        matterBox.clientHeight + 50,
        matterBox.clientWidth,
        100,
        {
          isStatic: true,
          render: { opacity: 0 },
        }
      );

      const leftWall = Bodies.rectangle(
        -50,
        matterBox.clientHeight / 2,
        100,
        matterBox.clientHeight,
        {
          isStatic: true,
          render: { opacity: 0 },
        }
      );

      const rightWall = Bodies.rectangle(
        matterBox.clientWidth + 50,
        matterBox.clientHeight / 2,
        100,
        matterBox.clientHeight,
        {
          isStatic: true,
          render: { opacity: 0 },
        }
      );

      const topWall = Bodies.rectangle(
        matterBox.clientWidth / 2,
        -50,
        matterBox.clientWidth,
        100,
        {
          isStatic: true,
          render: { opacity: 0 },
        }
      );

      Composite.add(engine.world, [ground, leftWall, rightWall, topWall]);
    }

    createBoundaries();

    // Create runner
    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    // Mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    Composite.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    // Update pill positions
    Events.on(engine, "afterUpdate", () => {
      elemPills.forEach((pillBody, index) => {
        const angle = pillBody.angle;
        const position = pillBody.position;
        const matterPillElem = matterPill[index];

        matterPillElem.style.left = `${position.x - matterPillElem.offsetWidth / 2}px`;
        matterPillElem.style.top = `${position.y - matterPillElem.offsetHeight / 2}px`;
        matterPillElem.style.transform = `rotate(${angle}rad)`;
      });
    });

    // Handle resize event
    function handleResize() {
      updateRenderSize();
      Composite.clear(engine.world, false);
      createBoundaries();
      elemPills = createPills();
      
      // Update mouse constraint
      // Remove existing event listeners
      mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
      mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);
      mouseConstraint.mouse.element.removeEventListener("touchstart", mouseConstraint.mouse.mousedown);
      mouseConstraint.mouse.element.removeEventListener("touchmove", mouseConstraint.mouse.mousemove);
      mouseConstraint.mouse.element.removeEventListener("touchend", mouseConstraint.mouse.mouseup);

      // Add new event listeners
      mouseConstraint.mouse.element.addEventListener("touchstart", mouseConstraint.mouse.mousedown, { passive: true });
      mouseConstraint.mouse.element.addEventListener("touchmove", (e) => {
        if (mouseConstraint.body) {
          mouseConstraint.mouse.mousemove(e);
        }
      });
      mouseConstraint.mouse.element.addEventListener("touchend", (e) => {
        if (mouseConstraint.body) {
          mouseConstraint.mouse.mouseup(e);
        }
      });
    }

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      Runner.stop(runner);
      Render.stop(render);
      Composite.clear(engine.world, false);
      window.removeEventListener("resize", handleResize);

      // Remove all event listeners
      mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
      mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);
      mouseConstraint.mouse.element.removeEventListener("touchstart", mouseConstraint.mouse.mousedown);
      mouseConstraint.mouse.element.removeEventListener("touchmove", mouseConstraint.mouse.mousemove);
      mouseConstraint.mouse.element.removeEventListener("touchend", mouseConstraint.mouse.mouseup);
    };
  }, []);

  return (
    <section className="skills w-full bg-custom-blue py-24 h-screen" id="skills">
      <div className="text-start ml-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-10">Skills</h1>
      </div>
      <div className="flex justify-center items-center w-full h-full bg-custom-blue">
        <div className="matter-box relative w-full h-full bg-custom-blue mb-16">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "Java",
            "RESTful API",
            "React.js",
            "Node.js",
            "MongoDB",
            "SQL",
            "PostgreSQL",
            "Postman",
            "Git",
            "GitHub",
            "Express.js",
            "Data Structures & Algorithms",
            "Tailwind CSS",
            "Bootstrap",
            "Spring Boot",
            "C++",
            "MS Office",
            "VS Code",
            "Eclipse",
            "IntelliJ IDEA",
            "Canvas",
            "Matter.js",
            "Vite",
            "TypeScript",
            "Poppins Font",
            "Web Development",
            "Particle.js",
            "Thunder Client",
            "Linux",
            "CMD",
            "Terminal",
            "Windows",
            "Blockchain",
            "Cloud Computing",
            "APIs",
            "REST",
            "JSON",
            "AJAX",
          ].map((skill) => (
            <div key={skill} className="dm-matter-elem-pill text-custom-blue">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
