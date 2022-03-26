import { Component } from "react";
import apiCall from "../../utils/apiCall";
import './Home.scss'

export default class Home extends Component {
    state = {
        stockInfo: null
    }

    componentDidMount(){
        if (!this.state.stockInfo) {
            apiCall.getHomeStockData().then((res) => {
                console.log(res)
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }

    render() {
        if (!this.state.stockInfo) {
            return <div className="loading"></div>;
          }

        console.log(this.state.stockInfo)

        return (
            <>
            <p>Hi</p>
            </>
        )
    }
}