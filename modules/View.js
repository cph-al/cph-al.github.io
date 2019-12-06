class View {
    constructor() {
        this.btnGetRates = document.getElementById("btnGetRates")
        this.CryptoOutput = document.getElementById("CryptoOutput")
        this.getCrypto = document.getElementById("getCrypto")
        this.getFromValuta = document.getElementById("getValutaFrom")
        this.getToValuta = document.getElementById("getValutaTo")
        this.getValue = document.getElementById("getValue")
        this.Crypto = document.getElementById("Crypto")
        this.getCurrentRates();
        this.getCryptoMethod();
    }
    getCurrentRates() {
        this.btnGetRates.addEventListener("click", () => {
            fetch('https://apiv2.bitcoinaverage.com/constants/exchangerates/global')
                .then((res) => res.json())
                .then((data) => {
                    let rates = Object.keys(data.rates)
                    console.log(rates)
                    let output = "<table> <tr> <th>Name</th><th>Rate</th><th>Valuta</th></tr>";
                    let i = 0;
                    rates.forEach(rate => {
                        output += `
                        <tr>
                        <td>${data.rates[rate].name}
                        <td>${data.rates[rate].rate}
                        <td>${rates[i]}
                        </tr>
                         `
                        i++
                    });
                    this.CryptoOutput.innerHTML = output;
                })
        })
    }
    getCryptoMethod() {
        this.getCrypto.addEventListener("click", () => {
            let from = this.getFromValuta.value;
            let to = this.getToValuta.value;
            let value = this.getValue.value;
            let url = "https://apiv2.bitcoinaverage.com/convert/global?from=" + from + "&to=" + to + "&amount=" + value
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    this.Crypto.innerHTML = `At ${data.time}, the ${value} ${from} is worth ${data.price} ${to}`
                })

        })
    }
};
export default View;