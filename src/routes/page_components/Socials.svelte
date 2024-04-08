<div class="socialMediaBtn">
    <a href="https://www.deviantart.com/arinemir">
      <div class="devianart hover"><i class="fa-brands fa-deviantart"></i> DeviantArt</div>
    </a>
    <a href="https://github.com/KiraneTMS/" target="_blank">
      <div class="github hover"><i class="fa-brands fa-github "></i> GitHub</div>
    </a>
    <a href="https://www.linkedin.com/in/arsya-alifian-widiatmoko-847089190/">
      <div class="linkedin hover"><i class="fa-brands fa-linkedin"></i> LinkedIn</div>
    </a>
  </div>
<style>
    .socialMediaBtn {
    height: 100px;
    min-width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    }

    .socialMediaBtn div {
    padding: 0.8rem 1.6rem;
    margin: 0 1rem;
    border: none;
    }

    .socialMediaBtn a {
    text-decoration: none;
    letter-spacing: 2px;
    font-weight: 700;
    }

    .socialMediaBtn a i {
    color: #000;
    font-size: 1.4rem;
    }

    .socialMediaBtn a div {
    color: #000;
    background-color: #ffffff;
    font-size: 1.3rem;
    border-radius: 4px;
    font-weight: 900;
    text-shadow: 0px 1px 1px #000;
    filter: saturate(200%) drop-shadow(1px 1px 10px #000);
    box-shadow: 0px 0px 2px 1px gray;
    }

    .hover:hover {
    background-color: #000;
    color: #fff;
    box-shadow: 0px 0px 0.5rem 0.2rem gray;
    filter: drop-shadow(2px 1px 1rem gray) saturate(200%);
    }

    .socialMediaBtn div:hover i {
    background-color: #000;
    color: #fff;
    font-size: 1.6rem;
    }

@media(max-width: 574px) {
    .socialMediaBtn {
    height: 70px;
    min-width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    }

    .socialMediaBtn div {
    padding: 0.2rem;
    margin: 0 1rem;
    border: none;
    }

    .socialMediaBtn a {
    text-decoration: none;
    letter-spacing: 2px;
    font-weight: 700;
    }

    .socialMediaBtn a i {
    color: #000;
    font-size: 1rem;
    }

    .socialMediaBtn a div {
    color: #000;
    background-color: #ffffff;
    font-size: 1rem;
    border-radius: 4px;
    font-weight: 900;
    text-shadow: 0px 1px 1px #000;
    filter: saturate(200%) drop-shadow(1px 1px 10px #000);
    box-shadow: 0px 0px 2px 1px gray;
    }
}
</style>