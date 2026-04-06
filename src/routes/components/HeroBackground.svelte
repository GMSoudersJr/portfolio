<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { readable, writable } from 'svelte/store';

	// Svelte 5 Runes for reactive state
	let { width, height } = $state({ width: 0, height: 0 });
	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	let animationFrameId: number;

	// Particle properties
	const particleCount = 100;
	const particles: Particle[] = [];
	const maxDistance = 100; // Max distance for connecting lines

	interface Particle {
		x: number;
		y: number;
		vx: number;
		vy: number;
		radius: number;
		color: string;
	}

	function initParticles() {
		particles.length = 0; // Clear existing particles
		for (let i = 0; i < particleCount; i++) {
			particles.push({
				x: Math.random() * width,
				y: Math.random() * height,
				vx: (Math.random() - 0.5) * 0.5, // Very slow movement
				vy: (Math.random() - 0.5) * 0.5,
				radius: Math.random() * 1.5 + 0.5, // Small particles
				color: 'rgba(255, 255, 255, 0.8)' // White particles
			});
		}
	}

	function draw() {
		if (!ctx) return;

		ctx.clearRect(0, 0, width, height); // Clear canvas

		for (let i = 0; i < particleCount; i++) {
			const p1 = particles[i];

			// Update particle position
			p1.x += p1.vx;
			p1.y += p1.vy;

			// Bounce off walls
			if (p1.x < 0 || p1.x > width) p1.vx *= -1;
			if (p1.y < 0 || p1.y > height) p1.vy *= -1;

			// Draw particle
			ctx.beginPath();
			ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
			ctx.fillStyle = p1.color;
			ctx.fill();

			// Draw lines to other particles
			for (let j = i + 1; j < particleCount; j++) {
				const p2 = particles[j];
				const distance = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));

				if (distance < maxDistance) {
					ctx.beginPath();
					ctx.moveTo(p1.x, p1.y);
					ctx.lineTo(p2.x, p2.y);
					ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / maxDistance})`; // Fade lines
					ctx.lineWidth = 0.5;
					ctx.stroke();
				}
			}
		}

		animationFrameId = requestAnimationFrame(draw);
	}

	function resizeCanvas() {
		width = window.innerWidth;
		height = window.innerHeight;
		if (canvas) {
			canvas.width = width;
			canvas.height = height;
			initParticles(); // Reinitialize particles on resize
		}
	}

	onMount(() => {
		ctx = canvas.getContext('2d')!;
		resizeCanvas(); // Initial resize and particle setup
		window.addEventListener('resize', resizeCanvas);
		draw(); // Start animation

		return () => {
			window.removeEventListener('resize', resizeCanvas);
			cancelAnimationFrame(animationFrameId);
		};
	});

	onDestroy(() => {
		cancelAnimationFrame(animationFrameId);
	});
</script>

<div class="hero-background-container">
	<canvas bind:this={canvas} />
</div>

<style>
	.hero-background-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0; /* Ensure it's behind other content */
		overflow: hidden; /* Hide particles that go off-screen */
	}

	canvas {
		display: block; /* Remove extra space below canvas */
		width: 100%;
		height: 100%;
	}
</style>
