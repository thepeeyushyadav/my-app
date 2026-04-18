import React from 'react'

const WeatherCard = (tempInfo) => {
     const {
          temp,
      humidity,
      pressure,
      name,
      speed,
      country,
      sunset
     }= tempInfo;
  return (
    <>
       <article className="widget">
        <div className="weatherIcon">
            <i className={"wi wi-day-sunny"}></i>
        </div>
          <div className="weatherInfo">
            <div className="temperature">
                <span>25.56deg;</span>
            </div>
            <div className="description">
              <div className="weatherCondition">sunny</div>
              <div className="place">{name},{country}</div>
            </div>
          </div>
          <div className="date">{new Date().toLocaleString()}</div>

          <div className="extra-temp">
            <div className="temp-info-minmax">
                <div className="two-sided-section">
                    <p><i className={"wi wi-sunset"}></i></p>
                    <p className="extra-info-leftside">19:19PM<br/>Sunset</p>
                </div>
                 <div className="two-sided-section">
                    <p><i className={"wi wi-humidity"}></i></p>
                    <p className="extra-info-leftside">19:19PM<br/>Humidity</p>
                </div>
                 <div className="weather-extra-info">
                      <div className="two-sided-section">
                    <p><i className={"wi wi-rain"}></i></p>
                    <p className="extra-info-leftside">19:19PM<br/>pressure</p>
                      </div>
                      <div className="two-sided-section">
                    <p><i className={"wi wi-wind"}></i></p>
                    <p className="extra-info-leftside">19:19PM<br/>speed</p>
                      </div>
                  </div>
            </div>
          </div>

      </article>
    </>
  )
}

export default WeatherCard
