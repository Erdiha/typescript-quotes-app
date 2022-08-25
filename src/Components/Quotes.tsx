import userEvent from '@testing-library/user-event';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import arrow from '../Assets/arrow-right.png';
import '../Stylings/quotes.css';

export interface Iquotes {
  user: string;
  quote: string;
}

const Quotes = () => {
  const [datas, setDatas]: any[] = useState([]);
  const [writeQuote, setWriteQuote] = useState(false);
  const [quote, setQuote] = useState<Iquotes>();
  const [counter, setCounter] = useState(0);
  const [show, setShow]: any[] = useState();

  //fetch the data from database
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('/api');
      setDatas(request.data);
      //console.log(request, show, datas);
    }
    fetchData();
  }, []);

  //handles change for form inputs
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setQuote((prev: any) => {
      return { ...prev, [name]: value };
    });
  };

  //sends data to database
  const handleClick = (e: any) => {
    e.preventDefault();
    setWriteQuote((prev) => !prev);
    setDatas((prev: any) => {
      return [...prev, quote];
    });
    setShow(quote);
    axios({
      method: 'post',
      url: '/api/save',
      data: quote,
    }).then(() => {
      console.log('data sent to the server');
      setQuote({
        user: '',
        quote: '',
      });
    });
  };
  //the arrow clicks handled by inc or dec counter
  const handleImg = (e: any) => {
    const { id } = e.target;
    if (datas.length > 1) {
      if (id === 'arrow-right') {
        counter < datas.length - 1 ? setCounter(counter + 1) : setCounter(0);
      } else {
        counter === 0 ? setCounter(datas.length - 1) : setCounter(counter - 1);
      }
    } else {
      setCounter(0);
    }
    setShow(datas[counter]);
  };

  return (
    <>
      <div className="quotes-wrapper">
        <section className=" section quote-container">
          {!writeQuote ? (
            <>
              <div className="quote-container">
                <img
                  id="arrow-right"
                  onClick={handleImg}
                  className="rigth-arrow arrow"
                  src={arrow}
                  alt="https://www.flaticon.com/free-icons/next"
                />
                {show ? (
                  <>
                    <div className="quote-items">
                      <p className="form-username">{show.user}</p>
                      <p className="form-text">{show.quote}</p>
                    </div>
                  </>
                ) : (
                  <>
                    {datas
                      .slice(datas.length - 2, datas.length - 1)
                      .map((item: any, index: number) => {
                        return (
                          <>
                            <div className="quote-items" key={index}>
                              <p className="form-username">{item.user}</p>
                              <p className="form-text">{item.quote}</p>
                            </div>
                          </>
                        );
                      })}
                  </>
                )}
                <img
                  id="arrow-left"
                  onClick={handleImg}
                  className="left-arrow arrow"
                  src={arrow}
                  alt="https://www.flaticon.com/free-icons/next"
                />
              </div>
            </>
          ) : (
            <form className="form" action="submit">
              <input
                name="user"
                type="text"
                className="user-name"
                onChange={handleChange}
                placeholder="Author Name"
              />
              <textarea
                name="quote"
                className="quote"
                placeholder="Quote"
                rows={10}
                onChange={handleChange}
              ></textarea>
            </form>
          )}
        </section>
        <section className=" section get-quotes">
          {writeQuote ? (
            <button onClick={handleClick} className="get-quote-btn">
              Post Quote
            </button>
          ) : (
            <button
              onClick={() => setWriteQuote((prev) => !prev)}
              className="get-quote-btn"
            >
              Write Quote
            </button>
          )}
        </section>
      </div>
    </>
  );
};

export default Quotes;
