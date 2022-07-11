import React from 'react'
import axios from 'axios'

function App() {
  const [arsFixtures, setArsFixtures] = React.useState(null)
  const [avlFixtures, setAvlFixtures] = React.useState(null)
  const [bouFixtures, setBouFixtures] = React.useState(null)
  const [breFixtures, setBreFixtures] = React.useState(null)
  const [bhaFixtures, setBhaFixtures] = React.useState(null)
  const [cheFixtures, setCheFixtures] = React.useState(null)
  const [mainData, setMainData] = React.useState(null)
  const [myTeam, setMyTeam] = React.useState(null)

  const teamNames = () => {
    if (mainData) {
      return mainData.teams.map(team => {
        return team.short_name
      })
    }
  }
  const myFpl = [
    { 'element': 69,'position': 1,'selling_price': 45,'multiplier': 1,'purchase_price': 45,'is_captain': false,'is_vice_captain': false },
    { 'element': 275,'position': 2,'selling_price': 55,'multiplier': 1,'purchase_price': 55,'is_captain': false,'is_vice_captain': false },
    { 'element': 237,'position': 3,'selling_price': 75,'multiplier': 1,'purchase_price': 75,'is_captain': false,'is_vice_captain': false },
    { 'element': 429,'position': 4,'selling_price': 45,'multiplier': 1,'purchase_price': 45,'is_captain': false,'is_vice_captain': false },
    { 'element': 56,'position': 5,'selling_price': 41,'multiplier': 1,'purchase_price': 40,'is_captain': false,'is_vice_captain': false },
    { 'element': 233,'position': 6,'selling_price': 125,'multiplier': 2,'purchase_price': 125,'is_captain': true,'is_vice_captain': false },
    { 'element': 419,'position': 7,'selling_price': 64,'multiplier': 1,'purchase_price': 64,'is_captain': false,'is_vice_captain': false },
    { 'element': 240,'position': 8,'selling_price': 76,'multiplier': 1,'purchase_price': 76,'is_captain': false,'is_vice_captain': false },
    { 'element': 177,'position': 9,'selling_price': 82,'multiplier': 1,'purchase_price': 82,'is_captain': false,'is_vice_captain': false },
    { 'element': 413,'position': 10,'selling_price': 77,'multiplier': 1,'purchase_price': 76,'is_captain': false,'is_vice_captain': false },
    { 'element': 579,'position': 11,'selling_price': 125,'multiplier': 1,'purchase_price': 125,'is_captain': false,'is_vice_captain': true },
    { 'element': 28,'position': 12,'selling_price': 40,'multiplier': 0,'purchase_price': 40,'is_captain': false,'is_vice_captain': false },
    { 'element': 196,'position': 13,'selling_price': 65,'multiplier': 0,'purchase_price': 65,'is_captain': false,'is_vice_captain': false },
    { 'element': 354,'position': 14,'selling_price': 45,'multiplier': 0,'purchase_price': 45,'is_captain': false,'is_vice_captain': false },
    { 'element': 491,'position': 15,'selling_price': 41,'multiplier': 0,'purchase_price': 41,'is_captain': false,'is_vice_captain': false }
  ]

  
  //* 1 ARSENAL FIXTURES API

  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('https://limitless-plateau-23448.herokuapp.com/https://fantasy.premierleague.com/api/element-summary/4/') 
      setArsFixtures(res.data)
    }
    getData()

  }, [ ])

  //* 2 AVL FIXTURES API

  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('https://limitless-plateau-23448.herokuapp.com/https://fantasy.premierleague.com/api/element-summary/29/') 
      setAvlFixtures(res.data)
    }
    getData()

  }, [ ])

  //* 3 BOU FIXTURES API

  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('https://limitless-plateau-23448.herokuapp.com/https://fantasy.premierleague.com/api/element-summary/57/') 
      setBouFixtures(res.data)
    }
    getData()
  
  }, [ ])

  //* 3 BRE FIXTURES API

  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('https://limitless-plateau-23448.herokuapp.com/https://fantasy.premierleague.com/api/element-summary/78/') 
      setBreFixtures(res.data)
    }
    getData()
    
  }, [ ])

  //* 3 BHA FIXTURES API

  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('https://limitless-plateau-23448.herokuapp.com/https://fantasy.premierleague.com/api/element-summary/101/') 
      setBhaFixtures(res.data)
    }
    getData()
      
  }, [ ])

  //* 3 CHE FIXTURES API

  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('https://limitless-plateau-23448.herokuapp.com/https://fantasy.premierleague.com/api/element-summary/127/') 
      setCheFixtures(res.data)
    }
    getData()
        
  }, [ ])

  //* BELOW IS MAIN DATA API

  React.useEffect(() => {
    const getData = async () => {
      const resTwo = await axios.get('https://limitless-plateau-23448.herokuapp.com/https://fantasy.premierleague.com/api/bootstrap-static/') 
      setMainData(resTwo.data)
    }
    getData()

  }, [ ])

  
  //* BELOW IS FPL TEAM API

  // React.useEffect(() => {
  //   const getData = async () => {
  //     const resThree = await axios.get('https://cors-anywhere.herokuapp.com/https://fantasy.premierleague.com/api/my-team/27905/') 
  //     // * END POINT IS MY TEAM ID
  //     setMyTeam(resThree.data)
  //   }
  //   getData()

  // }, [ ])

  
  //* TRANSLATE ID TO PLAYER
  const translateIdToPlayer = () => {
    if (mainData) {
      return mainData.elements.filter(player => {
        return player.id === 
        myFpl[0].element
      })
    }
  }



  return (
    <>
      <section>
        <h1>FIXTURES</h1>
        <div className='fixturetable'>
          <p className='teamName'>TEAMS</p>
          {arsFixtures && mainData &&
          arsFixtures.fixtures.map(fixture =>
            <div key={fixture.event_name} className='fixtureblock'>
              <>
                <div>
                  <div>
                    <p className='Gws'>GW{fixture.event_name.slice(8)}</p>
                  </div>
                </div>
              </>
            </div>
          )}
        </div>
        <div className='fixturetable'>
          <p className='teamName'>ARS</p>
          {arsFixtures && mainData &&
          arsFixtures.fixtures.map(fixture =>
            <div key={fixture.id} className='fixtureblock'>
              <>
                <div>
                  <div>
                    {fixture.team_h === 1 ?
                      <p className={`d${fixture.difficulty}`}>{teamNames()[fixture.team_a - 1].toLowerCase()}</p>
                      :
                      <p className={`d${fixture.difficulty}`}>{teamNames()[fixture.team_h - 1]}</p>}
                  </div>
                </div></>
            </div>
          )}
        </div>
        <div className='fixturetable'>
          <p className='teamName'>AVL</p>
          {avlFixtures && mainData &&
          avlFixtures.fixtures.map(fixture =>
            <div key={fixture.id} className='fixtureblock'>
              <>
                <div>
                  <div>
                    {fixture.team_h === 2 ?
                      <p className={`d${fixture.difficulty}`}>{teamNames()[fixture.team_a - 1].toLowerCase()}</p>
                      :
                      <p className={`d${fixture.difficulty}`}>{teamNames()[fixture.team_h - 1]}</p>}
                  </div>
                </div></>
            </div>
          )}
        </div>
        <div className='fixturetable'>
          <p className='teamName'>BOU</p>
          {bouFixtures && mainData &&
          bouFixtures.fixtures.map(fixture =>
            <div key={fixture.id} className='fixtureblock'>
              <>
                <div>
                  <div>
                    {fixture.team_h === 3 ?
                      <p className={`d${fixture.difficulty}`}>{teamNames()[fixture.team_a - 1].toLowerCase()}</p>
                      :
                      <p className={`d${fixture.difficulty}`}>{teamNames()[fixture.team_h - 1]}</p>}
                  </div>
                </div></>
            </div>
          )}
        </div>
        <div className='fixturetable'>
          <p className='teamName'>BRE</p>
          {breFixtures && mainData &&
          breFixtures.fixtures.map(fixture =>
            <div key={fixture.id} className='fixtureblock'>
              <>
                <div>
                  <div>
                    {fixture.team_h === 4 ?
                      <p className={`d${fixture.difficulty}`}>{teamNames()[fixture.team_a - 1].toLowerCase()}</p>
                      :
                      <p className={`d${fixture.difficulty}`}>{teamNames()[fixture.team_h - 1]}</p>}
                  </div>
                </div></>
            </div>
          )}
        </div>
        <div className='fixturetable'>
          <p className='teamName'>BHA</p>
          {bhaFixtures && mainData &&
          bhaFixtures.fixtures.map(fixture =>
            <div key={fixture.id} className='fixtureblock'>
              <>
                <div>
                  <div>
                    {fixture.team_h === 5 ?
                      <p className={`d${fixture.difficulty}`}>{teamNames()[fixture.team_a - 1].toLowerCase()}</p>
                      :
                      <p className={`d${fixture.difficulty}`}>{teamNames()[fixture.team_h - 1]}</p>}
                  </div>
                </div></>
            </div>
          )}
        </div>
        <div className='fixturetable'>
          <p className='teamName'>CHE</p>
          {cheFixtures && mainData &&
          cheFixtures.fixtures.map(fixture =>
            <div key={fixture.id} className='fixtureblock'>
              <>
                <div>
                  <div>
                    {fixture.team_h === 6 ?
                      <p className={`d${fixture.difficulty}`}>{teamNames()[fixture.team_a - 1].toLowerCase()}</p>
                      :
                      <p className={`d${fixture.difficulty}`}>{teamNames()[fixture.team_h - 1]}</p>}
                  </div>
                </div></>
            </div>
          )}
        </div>
      </section>
      <section>
        <h1>THESE ARE LIST OF TEAMS USING BIG DATA</h1>
        {mainData &&
          mainData.teams.map(team =>
            <h3>
              {team.short_name}
            </h3>
          )}
      </section>
      <section>
        <h1>THIS IS MY TEAM</h1>
        {myFpl.map(team =>
          <h3>
            {team.position}-{team.element}-{team.id}
          </h3>
        )}
      </section>
      <section>
        <h1>EXPERIMENT</h1>
        {mainData &&
        translateIdToPlayer().map(player =>
          <h3>
            {player.web_name}
            <p>{player.team}</p>
          </h3>
        )}
      </section>
    </>
  
  )
}

export default App
