## Instructions to update the site
Drop a mail at vsah@alumni.usc.edu for any issues.

Required content is stored in the gamepipe_content folder.

### 1. Updating "News" (follow the same instructions for Showcase and Rnd)
- First Line of the file will be the title of the post
- 2nd line of the file will be the date in MM/DD/YYYY format.
```
Post Title
12/03/2013
```
- To append an image, store the required image in the "gamepipe_content/files/" folder. use "--img-- " followed by the  name of the image.
```
--img-- pasted-graphic.jpg
```
- Surround content with <b>...</b> for bold text
```
<b>Bold Text</b>
```

- Use "- text_content" for bullet points
```
- First point
- Second Point
```

- For numbered bullets, use "1. text_content". replace 1 with any numbered value. Might not work with double digits.
```
1. first point
2. second point
3. third
```

- for links, to pages, use the html anchor tag format.
```
<a href="url_link"> text_content</a>
```
For images
```
<a href="url_link">
--img-- name_of_image
</a>
```

### 2. Updating People
Information stored under People/people.txt

information about each staff member follows the particular format
```
--START--
image_name
Name
Link_to_site
Information about the professor's title
(optional) more info
--END--
```
See people.txt for examples

### 3. Updating sponsors
Information stored under Sponsors/sponsors.txt

Format
```
Sponsor Name
sponsor_logo
sponsor_url_link
```
Ensure that you have a blank line between every sponsor entry.
Entries in the file will be displayed from top to bottom.
See sponsor.txt for examples.

### 4. Updating Press
Information stored under Press/press.txt

Format
```
link_to_article
date(no restriction on format)
Article Title
```
Eg:-
```
https://viterbischool.usc.edu/news/2018/01/can-save-world-origami/
5 July 2018
Can you Save the World with Origami?
```
Ensure that you have a blank line between every article entry.
Put new entries at the top of the file.
see press.txt for examples

### 5. Updating Trailers
Information stored under Trailers/trailers.txt
Every semester has a .txt file associated with it.

- First line in every text file has to identify the semester with the trailers.
Eg:-
```
USC GamePipe Laboratory Fall 2017 Trailers
```
- Use "- content" to signify the beginning of a section
Eg:
```
- Advanced Games
```
- Copy the embedded code from youtube and paste it into the file.
See any of the text files for examples.