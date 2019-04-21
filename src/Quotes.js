import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Quotes.css';



class Quotes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      author: "",
      quote: "",
      img: ""
    };
    this.newQuote = this.newQuote.bind(this);
  }

  componentDidMount() {
    let quoteIndex = Math.floor(Math.random() * this.props.quotes.length);
    let quote = this.props.quotes[quoteIndex].quote;
    let author = this.props.quotes[quoteIndex].author;
    let img = this.props.quotes[quoteIndex].img;
    
    this.setState({quote});
    this.setState({author});
    this.setState({img});
  }

  handleClick = () => {
    this.setState({
       quote: 'new quote',
       author: 'new author'
    });
  }

  newQuote() {
    let quoteIndex = Math.floor(Math.random() * this.props.quotes.length);
    let quote = this.props.quotes[quoteIndex].quote;
    let author = this.props.quotes[quoteIndex].author;
    let img = this.props.quotes[quoteIndex].img;
    
    this.setState({quote});
    this.setState({author});
    this.setState({img});
  }

  render() {
    const {author, quote, img} = this.state;
    const twitterQuote = quote.concat(" - ", author).split(" ").join("%20");
    return(
      <div>
        <section className="quote">
          <div className="background-image" style={{backgroundImage: "url(" + img + ")"}}></div>
          <div className="quote-content-area">
            <h1 id="author">{author}</h1>
            <h3 id="text">{quote}</h3>
            <a href={'https://twitter.com/intent/tweet?text=' + twitterQuote} className="btn twitter" id="tweet-quote"><FontAwesomeIcon icon="hashtag" /></a>
            <button className="btn" id="new-quote" onClick={this.newQuote}><FontAwesomeIcon icon="redo-alt" /></button>
          </div>
        </section>
      </div>
    );
  }
}

Quotes.defaultProps = {
  quotes: [
    {
      author: "Anthony Bourdain",
      quote: "Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind.",
      img: "https://images.unsplash.com/photo-1524654458049-e36be0721fa2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
      author: "Anonymous",
      quote: "Oh Darling, Let’s Be Adventurers.",
      img: "https://images.unsplash.com/photo-1515601915049-08c8836c2204?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
      author: "Andre Gide",
      quote: "Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
      author: "Roy M. Goodman",
      quote: "Remember that happiness is a way of travel – not a destination.",
      img: "https://images.unsplash.com/photo-1472791108553-c9405341e398?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
      author: "Herman Melville",
      quote: "It is not down in any map; true places never are.",
      img: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
      author: "Helen Keller",
      quote: "Life is either a daring adventure or nothing at all.",
      img: "https://images.unsplash.com/photo-1530258422663-6749b47598fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
      author: "Anonymous",
      quote: "Better to see something once than hear about it a thousand times.",
      img: "https://images.unsplash.com/photo-1515552726023-7125c8d07fb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
      author: "Anonymous",
      quote: "Adventure may hurt you but monotony will kill you.",
      img: "https://images.unsplash.com/photo-1521336575822-6da63fb45455?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
      author: "Anonymous",
      quote: "Dare to live the life you’ve always wanted.",
      img: "https://images.unsplash.com/photo-1542359649-31e03cd4d909?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
      author: "Jack Kerouac",
      quote: "Because in the end, you won’t remember the time you spent working in the office or mowing your lawn. Climb that goddamn mountain.",
      img: "https://images.unsplash.com/photo-1418846531910-2b7bb1043512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
      author: "Mark Twain",
      quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
      img: "https://images.unsplash.com/photo-1468078809804-4c7b3e60a478?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    }
  ]
}

export default Quotes;