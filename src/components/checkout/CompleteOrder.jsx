import "./CompleteOrder.scss";

const CompleteOrder = () => {

  return (
    <div className="card">
        <div className="back">
          <div className='decoration'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className='band'></div>
          <div className='cvv'>
            <span className='default'>123</span>
          </div>
        </div>
        <div className="front active">
          <div className='decoration'>
            <span></span>
            <span></span>
            <span></span>  
          </div>
          <div className='type'>CREDIT CARD</div>
          <div className='chip'>
            <span></span><span></span><span></span>
          </div>
          <div className='row info'>
            <div>
              <div className='row number'>
                <span className='default'>0000 0000 0000 0000</span>
              </div>
              <div className='row expiration'>
                <div className='label'>VALID THRU</div>
                <div className='date'>
                  <span className='default'>01</span>
                  <span className='default'>/</span>
                  <span className='default'>17</span>
                </div>
              </div>
              <div className='row name'>
                <span className='default'>PAUL M ATREIDES</span>
              </div>
            </div>
            <div className='flag'><span></span><span></span></div>
          </div>
        </div>
      </div>
  );
};

export default CompleteOrder;