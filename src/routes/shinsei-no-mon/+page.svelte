<script lang="ts">
    import Barcode from 'svelte-barcode';

	import { onMount } from 'svelte';
	import video from '$lib/videos/Open-Door.mp4';
	import moonCrest from '$lib/images/Van Sylvania Crest (Moon).png';
	import flowerCrest from '$lib/images/Van Sylvania Crest (Flower).png';

    export let form;
    console.log(form)

    let fadeOut = false;
    let authStep = 1;

    const closePanel =()=>{
        const rectangle = document.querySelector('.absolute-rectangle') as HTMLElement;

        
        rectangle.style.display = 'none';
    }
    function openPanel() {
        const rectangle = document.querySelector('.absolute-rectangle') as HTMLElement;
        console.log("click");
        rectangle.style.display = 'block';
    }

    const nextAuthStep =()=>{
        const idInput = document.querySelector('.id-input') as HTMLInputElement;
        const passwordInput = document.querySelector('.password-input') as HTMLInputElement;
        const loginButton = document.querySelector('.login-button') as HTMLButtonElement;

        loginButton.addEventListener('click', function() {
            const id = idInput.value;
            const password = passwordInput.value;

            // Check if id and password match the credentials
            if (id === '101666' && password === '12345') {
                // Authentication successful, proceed with your logic here
                auth;
            } else {
                // Authentication failed, handle accordingly
                alert('Authentication failed. Please check your credentials.');
            }
        });

    }

	const auth = () => {
        closePanel();
        fadeOut = true;
		const videoElement = document.getElementById('video') as HTMLVideoElement;
		if (videoElement) {
			videoElement.play();
            videoElement.playbackRate = 2
            videoElement.addEventListener('ended', () => {
                setTimeout(() => {
				    window.location.href = '/zettai-ryouiki';
                }, 500);
			});
		}
	};
    // let code, options = {
    //     data: '',
    //     type: 'CODE128',
    // };

    // function generateBarcode() {
    //     code = generateRandomCode();
    //     options.data = code;
    // }

    // async function sendBarcodeEmail(imageData: Blob) {
    //     // Implement your server-side email sending logic here or use an external service
    //     console.log('Email functionality not implemented (requires server-side or external service)');

    //     // Example placeholder for illustration using fetch:
    //     try {
    //         const response = await fetch('/api/send-email', {
    //         method: 'POST',
    //         body: imageData,
    //         });

    //         if (response.ok) {
    //         const data = await response.json();
    //         console.log(data.message); // Log the success message
    //         } else {
    //         console.error('Error sending email:', response.statusText);
    //         }
    //     } catch (error) {
    //         console.error('Error sending email:', error);
    //     }
    // }

    onMount(() => {
            const btn = document.querySelector('.btn') as HTMLElement;
            const h2 = document.querySelector('h2') as HTMLElement;
            const cri2 = document.querySelector('.cricle .cri-2') as HTMLElement;
            const cri1 = document.querySelector('.cricle .cri-1') as HTMLElement;
            const cri3 = document.querySelector('.cricle .cri-3') as HTMLElement;
            const holo1 = document.querySelector('.holo-1') as HTMLElement;

            if (btn && h2 && cri2 && cri1 && cri3 && holo1) {
                btn.addEventListener('mouseenter', () => {
                    h2.style.opacity = "1";
                    h2.style.transitionDelay = "1s";

                    cri2.style.transform = "scale(1) translateZ(0px)";
                    cri2.style.transition = "0.3s ease-in-out";

                    cri1.style.transform = "scale(1) translateZ(10px)";
                    cri1.style.transition = "0.5s ease-in-out";
                    cri1.style.transitionDelay = "0.3s";

                    cri3.style.transform = "scale(1) translateZ(5px)";
                    cri3.style.transition = "0.5s ease-in-out";
                    cri3.style.transitionDelay = "0.2s";

                    holo1.style.clipPath = "polygon(0 0, 100% 0, 58.5% 100%, 41.5% 100%)";
                    holo1.style.transform = "rotateY(calc(var(--i) * 7.7deg)) translateZ(25px) rotateX(-50deg) scaleY(1)";
                    holo1.style.boxShadow = "0 2px 20px #4cc9f0, 0 4px 40px #4cc9f0, 0 8px 80px #4cc9f0, 0 16px 160px #4cc9f0";
                });

                btn.addEventListener('mouseleave', () => {
                    h2.style.opacity = "0";
                    h2.style.transitionDelay = "0s";

                    cri2.style.transform = "scale(0) translateZ(0px)";
                    cri2.style.transitionDelay = "1.3s";

                    cri1.style.transform = "scale(0) translateZ(0px)";
                    cri1.style.transitionDelay = "1.0s";

                    cri3.style.transform = "scale(0) translateZ(0px)";
                    cri3.style.transitionDelay = "1.1s";

                    holo1.style.clipPath = "polygon(38% 0, 62% 0, 61% 100%, 39% 100%)";
                    holo1.style.transform = "rotateY(calc(var(--i) * 25.71deg)) translateZ(16px) rotateX(-37deg) scaleY(0.0)";
                });
            }
        });

        function generateRandomCode() {
        return Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
        }
</script>

<div class="container">
	<video id="video">
		<source src={video} type="video/mp4">
		Your browser does not support the video tag.
	</video>

    <div class="absolute-rectangle">
        <button class="close-button" on:click={closePanel}>×</button>
        <div class="title-container">
            <img src="{moonCrest}">
            <h1 class="title">Welcome</h1>
            <img src="{flowerCrest}">
        </div>
        <p class="description">
            You are about to enter the sanctum that governs the very essence of this realm, 'Zettai Ryouiki.' State your identity, for only those deemed worthy may tread within.</p>
        {#if authStep == 1}
            <div class="login-container">
                <!-- <form method="POST"> -->
                    <input type="id" name="id" placeholder="id" class="id-input">
                    <input type="password" name="password" placeholder="Password" class="password-input">
                    <button class="login-button" on:click={auth}>login</button>
                <!-- </form> -->
            </div>
        {/if}
        <!-- <Barcode
            value={'svelte-barcode'}
            elementTag={'canvas'}
            options={{
                format: 'CODE128',
                width: 2,
                height: 100,
                text: '',
                textAlign: 'center',
                textPosition: 'bottom',
                textMargin: 2,
                fontSize: 20,
                background: '#ffffff',
                lineColor: '#000000',
            }}
        /> -->
    </div>    

    <section class="hologram-container" style="
    transition: opacity 1s ease-in-out;
    opacity: {fadeOut ? 0 : 1};">
        <h2>Please Identify Yourself</h2>
        <div class="cricle">
            <div>
                <span class="cri cri-1"></span>
                <span class="cri cri-2"></span>
                <span class="cri cri-3"></span>
            </div>
            <div class="holo">
                <span class="holo-1" style="--i: 1"></span>
                <span class="holo-1" style="--i: 2"></span>
                <span class="holo-1" style="--i: 3"></span>
                <span class="holo-1" style="--i: 4"></span>
                <span class="holo-1" style="--i: 5"></span>
                <span class="holo-1" style="--i: 6"></span>
                <span class="holo-1" style="--i: 7"></span> 
                <span class="holo-1" style="--i: 8"></span>
                <span class="holo-1" style="--i: 9"></span>
                <span class="holo-1" style="--i: 10"></span>
                <span class="holo-1" style="--i: 11"></span>
                <span class="holo-1" style="--i: 12"></span>
                <span class="holo-1" style="--i: 13"></span>
                <span class="holo-1" style="--i: 14"></span>
            </div>
        </div>
        <button class="btn" id="btn" on:click={openPanel}>
            <svg fill="#fff" height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 485 485" xml:space="preserve">
            <g>
                <path d="M382.5,69.429c-7.441,0-14.5,1.646-20.852,4.573c-4.309-23.218-24.7-40.859-49.148-40.859
                    c-7.68,0-14.958,1.744-21.467,4.852C285.641,16.205,265.932,0,242.5,0c-23.432,0-43.141,16.206-48.533,37.995
                    c-6.508-3.107-13.787-4.852-21.467-4.852c-27.57,0-50,22.43-50,50v122.222c-6.129-2.686-12.891-4.187-20-4.187
                    c-27.57,0-50,22.43-50,50V354c0,72.233,58.766,131,131,131h118c72.233,0,131-58.767,131-131V119.429
                    C432.5,91.858,410.07,69.429,382.5,69.429z M402.5,354c0,55.691-45.309,101-101,101h-118c-55.691,0-101-45.309-101-101V251.178
                    c0-11.028,8.972-20,20-20s20,8.972,20,20v80h30V83.143c0-11.028,8.972-20,20-20s20,8.972,20,20v158.035h30V50
                    c0-11.028,8.972-20,20-20c11.028,0,20,8.972,20,20v191.178h30V83.143c0-11.028,8.972-20,20-20s20,8.972,20,20v158.035h30v-121.75
                    c0-11.028,8.972-20,20-20s20,8.972,20,20V354z"/>
            </g>
            </svg>
        </button>
    </section>
</div>

<style>
	.container {
		position: relative;
		width: 100vw;
		height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
	}
    video {
		position: absolute;
		top: 0px;
		left: 0;
		width: 100%;
        height: 100%;
	}
    .absolute-rectangle {
        position: absolute;
        top: 50%;
        left: 50%;
        display: none;
        padding: 10px;
        transform: translate(-50%, -50%);
        width: 400px; /* Adjust width as needed */
        height: auto; /* Adjust height as needed */
        background-color: rgba(194, 34, 34, 0.5);
        border-radius: 10px; /* Adjust border radius as needed */
        z-index: 2;
    }
    .close-button {
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        font-size: 20px;
        color: white;
        cursor: pointer;
    }

    .title-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .title {
        margin: 0 10px; /* Adjust margin as needed */
        font-size: 20px;
        color: white;
    }

    img {
        max-width: 50px; /* Adjust image width as needed */
        height: auto;
    }

    .description {
        text-align: center;
        margin-top: 10px; /* Adjust margin as needed */
        color: white;
    }

    .login-container {
        margin-top: 20px; /* Adjust margin as needed */
        text-align: center;
    }

    .id-input,
    .password-input {
        width: 80%;
        margin-bottom: 10px;
        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, 0.6);
        outline: none;
        color: #333333;
    }

    .login-button {
        width: 80%;
        padding: 10px;
        border: none;
        border-radius: 20px;
        background-color: red;
        color: white;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .login-button:hover {
        background-color: darkred;
    }
    

    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
    section {
    position: absolute;
    width: 90%; /* Adjust as needed */
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .cricle {
        position: absolute;
        bottom: 43%;
        left: 70%;
        width: 200px;
        height: 200px;
        transform-origin: center;
        transform-style: preserve-3d;
        display: flex;
        justify-content: center;
        transform: perspective(800px) translateX(-50%) rotateX(73deg) rotateZ(0deg)
        rotateY(0deg);
        align-items: flex-end;
        div {
        transform-style: preserve-3d;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .cri {
            position: absolute;
            width: 100px;
            height: 100px;
            transition: 0.5s ease-in-out;
            background: linear-gradient(#4895ef, #ade8f4);
            background: repeating-radial-gradient(
            #e5e5e5 3px,
            #0063fe 37px,
            transparent,
            transparent
            );
            transform: scale(0) translateZ(0px);
            border: 5px solid #0063fe;
            border-radius: 50%;
            filter: blur(0.5px);
            opacity: 0.5;
            z-index: 3;
            box-shadow: 0 2px 20px #0063fe, 0 4px 40px #0063fe, 0 8px 80px #0063fe,
            0 16px 160px #0063fe;
            &:nth-child(2) {
            width: 100%;
            height: 100%;
            }
            &:nth-child(3) {
            width: 150px;
            height: 150px;
            }
        }
        }
        .holo {
        position: absolute;
        top: 0%;
        width: 100%;
        height: 100%;
        background: transparent;
        transform-style: preserve-3d;
        transform: rotateX(-90deg) translateZ(0px) translateY(-100px);
        .holo-1 {
            position: absolute;
            left: 65px;
            width: 73px;
            height: 180px;
            background: linear-gradient(to top, #4895ef -60%, transparent);
            clip-path: polygon(38% 0, 62% 0, 61% 100%, 39% 100%);
            filter: blur(1px);
            transform-origin: bottom center;
            transform: rotateY(calc(var(--i) * 25.71deg)) translateZ(16px)
            rotateX(-37deg) scaleY(0);
            transition: 0.4s ease-in-out;
            transition-delay: 0.6s;
            &::before {
            content: "";
            position: absolute;
            bottom: 0%;
            left: 0%;
            width: 100%;
            height: 5px;
            background: #4cc9f0;
            box-shadow: 0 0 20px #4cc9f0, 0 0 40px #4cc9f0, 0 0 80px #4cc9f0,
                0 0 160px #4cc9f0;
            }
        }
        }
    }
    & h2 {
        position: absolute;
        bottom: 60%;
        left: 70%;
        transform-style: preserve-3d;
        transform: translateX(-50%); /* Center align */
        font-size: 1.5em;
        text-transform: uppercase;
        font-family: "Poppins", sans-serif;
        color: transparent;
        transform-origin: bottom center;
        transition: 0.5s ease-in-out;
        background-blend-mode: multiply;
        opacity: 0;
        -webkit-text-stroke: 2px rgba(0, 99, 254, 0.5);
        text-shadow: 0 0 10px rgba(244, 246, 250, 0.8), 0 0 30px rgba(240, 240, 240, 0.9);
    }
    .btn {
        cursor: pointer;
        position: absolute;
        bottom: 40%;
        left: 70%;
        transform: translateX(-50%);
        width: 70px;
        border: none;
        height: 80px;
        border-radius: 5px;
        color: rgba(255, 255, 255, 0.8);
        text-transform: uppercase;
        background: rgba(0, 99, 254, 0.5);
        box-shadow: inset 0 0 10px rgba(0, 99, 254, 0.5),
        0 0 20px rgba(0, 99, 254, 0.5), 0 0 40px rgba(0, 99, 254, 0.5);
    }
    }



	/* Add your existing CSS styles here */

    /* Add the CSS styles provided in the original code */
</style>
