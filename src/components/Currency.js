import React from 'react';

class CurrencyConverter extends React.Component {

    state = {
        CurrencySek: [],
        CurrencyEur: [],
        updateDate: [],
    }
    
    componentDidMount() {
        this.fetchCurrency();
    }

    fetchCurrency = () => {
        fetch('http://data.fixer.io/api/latest?access_key=dc99bb64c6e0441cb9e45ca11e0d75da')
        .then(response => response.json())
        .then((CurrencyData) => {
            this.setState({CurrencySek: CurrencyData.rates.SEK})
            this.setState({CurrencyEur: CurrencyData.rates.EUR})
            this.setState({updateDate: CurrencyData.date});
        })
    }
    
    render() {
        return(
            <div className="currencyWrapper">
                <h1 className = "currencyHeadline"> CURRENCY </h1>
                <p>SEK: {this.state.CurrencySek}</p>
                <p>EURO: {this.state.CurrencyEur}</p>
                <button className="updateButton" onClick={this.updateDate}>Update</button>
                <p>Last updated: {this.state.updateDate}</p>
            </div>
            )
    }

}
export default CurrencyConverter;
