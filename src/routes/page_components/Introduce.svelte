<script>
    import { onMount } from 'svelte';

    let currentString = 0;
    let isDeleting = false;
    let deletingSpeed = 50;
    let typingSpeed = 100;

    const strings = [
    'Android Developer',
    'Web Developer',
    'Designer',
    '2D Artist'
    ];

    let typedText = '';

    function typeWriter() {
    if (isDeleting) {
        typedText = typedText.substring(0, typedText.length - 1);
    } else {
        if (typedText.length < strings[currentString].length) {
        typedText += strings[currentString].charAt(typedText.length);
        } else {
        isDeleting = true;
        }
    }

    setTimeout(() => {
        if (isDeleting && typedText.length === 0) {
        currentString = (currentString + 1) % strings.length;
        isDeleting = false;
        }
        typeWriter();
    }, isDeleting ? deletingSpeed : typingSpeed);
    }

    onMount(() => {
    typeWriter();
    });
</script>
 <!-- about section start -->
 <section class="about" id="about">
    <div class="max-width">
        <h2 class="title">About Me</h2>
        <div class="about-content">
            <div class="column right">
                <div class="text">I'm Name and I am a <span class="typing-2">{typedText}</span></div>
                <p>Hi there! I'm a 16 yr old developer with over 7 years of experience. I like making fun and satisying games and doing pixel art. I alos like playing chess.</p>
              <br>
<p style="font-style: italic;">
Fun Fact: I was the runner up for the Pixilart Thanksgiving competition and my team won the Charlton Chess v Dartford Chess Tournament.
</p>
            </div>
        </div>
    </div>
</section>
<style>
/*  import google fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Ubuntu:wght@400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Raleway&family=Ubuntu:wght@400;500;700&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}
html{
    scroll-behavior: smooth;
}


/* custom scroll bar */
/* ::-webkit-scrollbar {
    width: 10px;
}
::-webkit-scrollbar-track {
    background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
    background: #888;
}

::-webkit-scrollbar-thumb:hover {
    background: #555;
} */

/* all similar content styling codes */
section{
    padding: 100px 0;
}
.max-width{
    max-width: 1300px;
    padding: 0 80px;
    margin: auto;
}
.about{
    font-family: 'Raleway', sans-serif;
    color: #fff;
}
.about .about-content{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}
section .title{
    position: relative;
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 60px;
    padding-bottom: 20px;
    font-family: 'Ubuntu', sans-serif;
}
section .title::before{
    content: "";
    position: absolute;
    bottom: 0px;
    left: 50%;
    width: 180px;
    height: 3px;
    background: #111;
    transform: translateX(-50%);
}
section .title::after{
    position: absolute;
    bottom: -8px;
    left: 50%;
    font-size: 20px;
    color: #6e6e6e;
    padding: 0 5px;
    background: #fff;
    transform: translateX(-50%);
}

/* about section styling */
.about .title::after{
    content: "who I Am";
}
.about .about-content .left{
    width: 45%;
}
.about .about-content .left img{
    height: 400px;
    width: 400px;
    object-fit: cover;
    border-radius: 6px;
}
.about .about-content .right{
    width: 100%;
}
.about .about-content .right .text{
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
}
.about .about-content .right .text span{
    color: #9d87ff;
}
.about .about-content .right p{
    text-align: justify;
}
.about .about-content .right a{
    display: inline-block;
    background: #6e6e6e;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    padding: 10px 30px;
    margin-top: 20px;
    border-radius: 6px;
    border: 2px solid #6e6e6e;
    transition: all 0.3s ease;
}
.about .about-content .right a:hover{
    color: #6e6e6e;
    background: none;
}

/* responsive media query start */
@media (max-width: 1104px) {
    .about .about-content{
        height: 350px;
        width: 350px;
    }
}

@media (max-width: 991px) {
    .max-width{
        padding: 0 50px;
    }
}
@media (max-width: 947px){
    .max-width{
        max-width: 930px;
    }
    .about .about-content .column{
        width: 100%;
    }
    .about .about-content{
        display: flex;
        justify-content: center;
        margin: 0 auto 60px;
    }
    .about .about-content .right{
        flex: 100%;
    }
}

@media (max-width: 690px) {
    .max-width{
        padding: 0 23px;
    }
}

@media (max-width: 500px) {
    .about .about-content .right .text{
        font-size: 19px;
    }
}
</style>