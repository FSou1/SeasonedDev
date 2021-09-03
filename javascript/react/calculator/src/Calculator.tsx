import './Calculator.css';

function Calculator() {
  return (
    <div className="container">
      <div className="display">
        <span>18</span>
      </div>
      <div className="cellpad">
        <div className="row">
          <div className="cell wd_25">C</div>
          <div className="cell wd_25">+-</div>
          <div className="cell wd_25">%</div>
          <div className="cell wd_25">/</div>
        </div>
        <div className="row">
          <div className="cell wd_25">7</div>
          <div className="cell wd_25">8</div>
          <div className="cell wd_25">9</div>
          <div className="cell wd_25">X</div>
        </div>
        <div className="row">
          <div className="cell wd_25">4</div>
          <div className="cell wd_25">5</div>
          <div className="cell wd_25">6</div>
          <div className="cell wd_25">-</div>
        </div>
        <div className="row">
          <div className="cell wd_25">1</div>
          <div className="cell wd_25">2</div>
          <div className="cell wd_25">3</div>
          <div className="cell wd_25">+</div>
        </div>
        <div className="row">
          <div className="cell wd_25">0</div>
          <div className="cell wd_25">.</div>
          <div className="cell wd_50 total">=</div>
        </div>
      </div>
    </div>
  )
}

export default Calculator;