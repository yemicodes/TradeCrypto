import highchartsConfig from "./HighchartsConfig";
import React from "react";
import { Tile } from "../Shared/Tile";
import { AppContext } from "../App/AppProvider";
import ReactHighcharts from "react-highcharts";
import HighchartsTheme from "./HighchartsTheme";
ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

// eslint-disable-next-line
export default function () {
  return (
    <AppContext.Consumer>
      {({historical}) => (
        <Tile>
          {historical ?
            <ReactHighcharts config={highchartsConfig(historical)} />
            : <div> Loading data... </div>
          }
        </Tile>
      )}
    </AppContext.Consumer>
  );
}
