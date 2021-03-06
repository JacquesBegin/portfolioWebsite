# Portfolio Blog Notes

### Blog 1
## First Look at Using Markdown

Markdown is a type of language that is used to format text.

The default GitHub read me file (README.md) is intended for markdown use.



# Headers

You can create headers in Markdown by prefixing "#" (hashtag/pound/number sign) to the intended header content.

```shell
# This is a HEADER
```

EX.

# This is a HEADER

Just like with HTML, there are 6 header sizes.

# H1 Header
Written as "# H1 Header"
```shell
# H1 Header
```
## H2 Header
Written as "## H2 Header"
```shell
## H2 Header
```
### H3 Header
Written as "### H3 Header"
```shell
### H3 Header
```
#### H4 Header
Written as "#### H4 Header"
```shell
#### H4 Header
```
##### H5 Header
Written as "##### H5 Header"
```shell
##### H5 Header
```
###### H6 Header
Written as "###### H6 Header"
```shell
###### H6 Header
```

# Emphasis

Italics and strong text can be created as such:

Italics - use a single asterisks or single underscores

```shell
*italics* or _italics_
```
EX.

*italics* or _italics_

Strong - use double asterisks or underscores

```shell
**strong** or __strong__
```
EX.
**strong** or __strong__




# Links

Another good feature for enhancing our Markdown is using links.

To create a link follow this syntax: 
```shell
[Link Text](URL)
```
```shell
The infamous [Click Here](http://www.jacquesbegin.com) link.
```
EX.

The infamous [Click Here](http://www.jacquesbegin.com) link.


# Lists

To create an unordered list in Markdown use this syntax:

```shell
* List
  * Item 1
```
EX.
* List
  * Item 1

Aside from asterisks, lists can also use pluses or minuses for bullets.

```shell
* List
  + Plus
  - Minus
```
EX.

* List
  + Plus
  - Minus



An ordered list is created like this:

```shell
1. Item 1
2. Item 2
3. Item 3
```
EX.
1. Item 1
2. Item 2
3. Item 3


# Table of Contents

As with most textbooks and other informative documentation, table of contents are used to quickly locate specific content sections. You can do this in Markdown as well.

```shell
[README.md](/README.md)
```

EX.

### Table of Contents
* [README.md](/README.md)
* [index.html](/public/index.html)
* [styles.css](/public/temp/css/styles.css)


# Code Blocks

A very helpful feature in Markdown is code blocks. These are sections of the page that are formatted to display code that more closely resembles a code editor.

You have seen many examples in this article so far, such as:

```shell
## H2 Header
```

and

```shell
[Link Text](URL)
```

To create a basic code block use the following syntax:

```shell
| ```shell          |
| Write code here   |
| without the       |
| vertical pipes    |
| ```               |
```

```shell
Write code here
without the
vertical pipes
```

If you swap out "shell" with "javascript" then the code block will have JavaScript syntax highlighting.

```javascript
function helloWorld() {
  console.log("Hello World!");
}
```