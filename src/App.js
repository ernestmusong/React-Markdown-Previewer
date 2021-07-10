
import React, { Component } from 'react'
import './App.css';
import marked from 'marked';
 
const initialState = `
This is a paragraph

**This is bolded text**
>Block Quotes!

# Heading
## Heading 2
- list item 1
- list item 2
- list item 3

[Visit this website](https://www.livescore.com)

This is an inline \`<div></div>\`

This is a block of code

\`\`\`
  let x = 1;
  let y = 2;
  let z = x + y;
\`\`\`

![logo](https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxUD1_ZxaSXZ8CZqly1QKq0WdhOh2dDQ22rWkNhn3jfQ&usqp=CAU&ec=45673586)
`;

class App extends Component {
  state = {
    text: initialState,
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    const { text } = this.state;
    const markdown = marked(text, { breaks: true });
    return (
      <div>
        <h2 className="text-center mt-4">Convert your markdown</h2>
        <div className="row">
          <div className="col-lg-6">
            <h5 className="text-left">Enter your markdown</h5>
            <textarea
              className="form-control p-2"
              id="editor"
              value={text}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-lg-6">
            <h5 className="text-left" style={{textAlign:"left"}}>See your results</h5>

            <div
              className="preview rounded p-2"
              dangerouslySetInnerHTML={{ __html: markdown }}
              id="preview"
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

 

export default App;
