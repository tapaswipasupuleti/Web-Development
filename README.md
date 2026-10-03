## PROJECT - 1 : Best Places Webpage (HTML)

## Algorithm

1. **Start** by creating an HTML document.
2. **Define** an `<h1>` heading with the title "The Best Places according to Tapaswi".
3. **Add** an `<h2>` heading with the text "The Best 2 places of all-time."
4. **Insert** an `<hr />` tag to create a horizontal line.
5. **Create** an `<h3>` heading with the name of the first place.
6. **Add** a `<p>` paragraph with a short description of the first place.
7. **Create** another `<h3>` heading with the name of the second place.
8. **Add** a `<p>` paragraph with a short description of the second place.
9. **End** the document.


## PROJECT - 2 : Birthday Invitation Webpage (HTML)

## Algorithm

1. **Start** by creating an HTML document.
2. **Define** an `<h1>` heading with the birthday invitation title.
3. **Add** an `<h2>` heading with the birthday date.
4. **Insert** an image using the `<img>` tag.
5. **Add** an `<h3>` heading for the things to bring.
6. **Create** an unordered list using the `<ul>` tag.
7. **Add** each item using the `<li>` tag.
8. **Add** an `<h3>` heading for the party location.
9. **Add** a `<p>` paragraph containing the party location.
10. **Insert** an `<a>` tag to provide a link to the party location.
11. **End** the document.


## PROJECT - 3 : Color Learning Webpage (HTML & CSS)

## Algorithm

1. **Start** by creating an HTML document.
2. **Create** a CSS file named `style.css`.
3. **Link** the CSS file to the HTML file using the `<link>` tag.
4. **Add** an `<h1>` heading with the text "Learn Colors".
5. **Create** `<h2>` headings for different colors such as Red, Blue, Green, Yellow, and Purple.
6. **Assign** a unique `id` and a common `class` named `color-title` to the color headings.
7. **Insert** an image below each color heading using the `<img>` tag.
8. **Use** ID selectors in CSS to apply different colors to each heading.
9. **Use** the `.color-title` class to set the font weight of the headings.
10. **Use** the `img` selector to set all images to 200px width and 200px height.
11. **Set** the body content to be center-aligned.
12. **End** the document.


## PROJECT - 4 : Abdul Kalam Motivational Poster (HTML & CSS)

## Algorithm

1. **Start** by creating an HTML document.
2. **Create** a CSS file named `style.css`.
3. **Link** the CSS file to the HTML document using the `<link>` tag.
4. **Create** a `<div>` with the class name `poster` to contain the poster content.
5. **Insert** an image of Dr. A. P. J. Abdul Kalam using the `<img>` tag.
6. **Add** an `<h1>` heading with the text "Quote of Dr. A. P. J. Abdul Kalam".
7. **Add** a `<p>` paragraph containing the motivational quote.
8. **Set** the body background color to black using CSS.
9. **Center** the content using `text-align: center`.
10. **Set** the poster width to 600px and center it using `margin`.
11. **Set** the image width to 100% and add a yellow border.
12. **Set** the `<h1>` color to yellow and its font size to 40px.
13. **Set** the `<p>` color to white and its font size to 20px.
14. **End** the document.

## PROJECT - 5 : Name Card Webpage (FLASK)

## Algorithm

1. **Initialize Flask Application**:
   - Import the `Flask` class from the Flask package.
   - Create an instance of the `Flask` application.

2. **Define Route**:
   - Set up the root URL route (`'/'`) with a function `greet()`.
   - Use the `render_template` function to return the `index.html` file when the route is accessed.

3. **Run Application**:
   - Use the `app.run(debug=True)` method to start the Flask server with debugging enabled if the script is run as the main program.

   ## PROJECT - 6 : Blog Website (FLASK)

## Algorithm

1. **Import Required Libraries:**
   - Import `Flask` and `render_template` from the Flask framework.

2. **Initialize Flask Application:**
   - Create an instance of the `Flask` application.

3. **Define Routes:**
   - **Root Route (`/`):**
     - Render the `index.html` template.
   - **About Route (`/about`):**
     - Render the `about.html` template.
   - **Contact Route (`/contact`):**
     - Render the `contact.html` template.
   - **Post Route (`/post`):**
     - Render the `post.html` template.

4. **Use Static Files:**
   - Store CSS, JavaScript, and images inside the `static` folder.
   - Use `url_for()` to connect the static files with the HTML templates.

5. **Run the Application:**
   - Check if the script is run directly (i.e., `__name__ == "__main__"`).
   - Start the Flask development server using `app.run(debug=True)`.

