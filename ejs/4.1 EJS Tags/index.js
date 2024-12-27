import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<strong>This is some strong text</strong>",
  };
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
/*
<%= ... %>	To safely render data into the page (text, variables, or expressions).
<%- ... %>	To render raw HTML or include other templates.
<% ... %>	To execute JavaScript logic (conditions, loops) without rendering anything directly.
<%# ... %>	To add developer-only comments in the template.
<%-- ... --%>	To add comments that are stripped from the output entirely.
<%- include('file') %>
*/