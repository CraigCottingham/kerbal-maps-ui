import React from "react"

class Credits extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col credits">
            <h2>Kerbal Maps</h2>
            <p>is made possible by</p>
            <ul>
              <li><a href="https://www.kerbalspaceprogram.com/">Kerbal Space Program</a> for the stock map data, as well as being the reason for doing this in the first place</li>
              <li><a href="https://github.com/Sigma88/Sigma-Cartographer">Sigma-Cartographer</a> for a means of extracting the map data</li>
              <li><a href="https://github.com/jrossignol/WaypointManager">Waypoint Manager</a> and KSP forum user <a href="https://forum.kerbalspaceprogram.com/index.php?/profile/133118-miles-teg/">Miles Teg</a> for the list of waypoints for anomalies currently baked in</li>
              <li>
                <a href="https://leafletjs.com">Leaflet.js</a> for a means to display the map images, with the help of
                <ul>
                  <li><a href="https://github.com/Leaflet/Leaflet.Graticule">Leaflet.Graticule</a></li>
                  <li><a href="https://github.com/nickpeihl/leaflet-sidebar-v2">leaflet-sidebar-v2</a></li>
                  <li><a href="https://github.com/Leaflet/Leaflet.Icon.Glyph">Leaflet.Icon.Glyph</a></li>
                  <li><a href="https://github.com/consbio/Leaflet.HtmlLegend">Leaflet.HtmlLegend</a></li>
                </ul>
              </li>
              <li><a href="https://getbootstrap.com">Bootstrap</a> for styling and layout</li>
              <li><a href="https://fontawesome.com">Font Awesome</a> for graphics</li>
              <li><a href="https://realfavicongenerator.net/">RealFaviconGenerator</a> for icons</li>
              <li><a href="http://ksp.deringenieur.net">ksp.deringenieur.net</a> (and <a href="http://www.kerbalmaps.com">kerbalmaps.com</a> before it) for the original idea</li>
              <li><a href="https://hexdocs.pm/distillery/">Distillery</a> for making it possible to package the app so it can be made public</li>
              <li><a href="https://heroku.com/">Heroku</a> for hosting the app</li>
              <li><a href="https://aws.amazon.com/">Amazon AWS</a> for hosting the map images</li>
              <li><a href="https://github.com/WizardOfOgz">Andy Ogzewalla</a> for JS mentorship, wizardry, and general awesomeness</li>
              <li><a href="https://forum.kerbalspaceprogram.com/index.php?/profile/202640-rowbear/">RowBear</a> for contributing CPU cycles and person-hours to extracting map tiles for the JNSQ planet pack</li>
            </ul>
            <p>kerbal maps is a <a href="http://finitemonkeys.org/">finitemonkeys</a> joint</p>
            <p>Copyright © 2018-2020 Craig S. Cottingham and subject to <a href="http://www.apache.org/licenses/LICENSE-2.0">the Apache License, Version 2.0</a>, except where stated otherwise.</p>
            <p>Map tiles for the <a href="https://forum.kerbalspaceprogram.com/index.php?/topic/184880-181-jnsq-090-03-feb-2020/&tab=comments#comment-3608088">JNSQ</a> planet pack are licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/3.0/">CC BY-NC-ND 3.0</a>.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Credits
