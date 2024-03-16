<script lang="ts">
</script>

<style>
  html {
    font-size: 16px;
  }
  body {
    background-color: #1F2039;
  }
  section {
    padding: 30px;
  }
  h1 {
      font-size: 3rem;
      color: rgb(58, 0, 167);
      text-align: center;
      margin-bottom: 50px;
    }
  form {
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: auto;
    color: white;
  }
  .name-email {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  .name-email div {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  label {
    font-size: 1.5em;
    margin-bottom: 10px;
    margin-top: 20px;
  }
  input, textarea {
    border-radius: 3px;
    border: none;
    padding: 10px;
  }
  input[type="submit"] {
    width: 200px;
    margin: auto;
    margin-top: 20px;
  }
  .cta {
    font-size: 1.1em;
    color: white;
    background: linear-gradient(64.00916346799386deg, rgba(58, 0, 92,1) 23.44140625%,rgba(58, 0, 92,1) 23.44140625%,rgb(51, 0, 236) 79.84765625%);
    padding: 20px 30px;
    border-radius: 50px;
  }
  .cta:hover {
    text-decoration: none;
    background: linear-gradient(64.00916346799386deg, rgb(112, 1, 177) 23.44140625%,rgba(112, 1, 177) 23.44140625%,rgb(110, 70, 255) 79.84765625%);
  }
  @media screen and (max-width: 750px) {
    form {
      width: 100%;
    }
  }

  @media screen and (max-width: 530px) {
    .name-email {
      flex-direction: column;
      gap: 0;
    }
  }
</style>
    <section>
      <h1>Contact Me</h1>
      <form method="post" action="mailto:arsyaalifian4@gmail.com">
          <div class="name-email">
              <div>
                  <label for="name">Name</label>
                  <input type="text" name="nom" id="nom" maxlength="50" required>
              </div>
              <div>
                  <label for="email">email</label>
                  <input type="email" name="email" id="email" maxlength="50" required>
              </div>
          </div>
          <label for="message">message</label>
          <textarea name="message" id="message" rows="10" maxlength="1000" required></textarea>
          <input type="submit" value="Send" class="cta" >
      </form>
  </section>