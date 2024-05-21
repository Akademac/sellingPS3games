const Contact = () => {
  return (
    <div className="contact__wrapper" id='contact'>
      <div className="contact__div">
        <div className="con_left">
          <h2>How This All Works?</h2>
          <p>Through this website, you can find pretty much every game for PS3!</p>
          <ol className="contact_ol">
            <li>
            We have a database of almost every game ever made for the PS3, but only a small number of them are shown on this website for presentation purposes only.
            </li>
            <li>
            If you want a game that is not listed on the Website, ask us for your desired game through the form on the right.
            </li>
            <li>If we have it and if the price is right for you, we will send it to you via a link, which you should click and download the game to your console...</li>
            <li>
            If your console is chipped, you can play the game without any installation or additional software...
            </li>
          </ol>
          <h3>Enjoy gaming!</h3>
        </div>
        <div className='con_right'>
            <h3>Please, Fill The Form</h3>
            <form action="" className='con_form'>
                <input type="text" name='first_name' placeholder="Name" />
                <input type="text" name='last_name' placeholder="Surname" />
                <input type="text" name="address" placeholder="Email" />
                <input type="text" name="br_tel" placeholder="Name of the game" />
                <textarea name="text" cols="30" rows="5" placeholder="Write us the name of the game and which version you are interested in, and we will send you the price."></textarea>
                <button type='submit' className='con_btn'>Send</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
