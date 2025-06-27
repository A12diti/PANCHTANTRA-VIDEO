const tl = gsap.timeline();

// Scene 1: Tree fades in
tl.to("#tree", { duration: 1.5, opacity: 1 });

// Scene 2: Monkey appears
tl.to("#monkey", { duration: 1.2, opacity: 1, x: 50 }, "+=0.5");

// Scene 3: Crocodile swims in
tl.to("#crocodile", { duration: 1.2, opacity: 1, x: -50 }, "+=0.5");

// Scene 4: Wife enters
tl.to("#wife", { duration: 1.2, opacity: 1, x: -200 }, "+=2");

// Scene 5: Monkey moves toward crocodile
tl.to("#monkey", { duration: 2, x: 150 }, "+=1");

// Scene 6: Crocodile moves toward center
tl.to("#crocodile", { duration: 2, x: -150 }, "+=1");

// Scene 7: Wife reacts and moves off
tl.to("#wife", { duration: 2, x: -400 }, "+=1");

// Final Scene: Tree shakes (victory)
tl.to("#tree", { duration: 1, scale: 1.1, repeat: 3, yoyo: true }, "+=2")
  .pause(); // stop animation at end
