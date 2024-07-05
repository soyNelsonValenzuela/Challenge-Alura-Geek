function format_currency ( num ) {
    const currencyFormatter = new Intl.NumberFormat("es-CL", {
        style: 'currency',
        currency: 'CLP',
    })

    return currencyFormatter.format(num);
}


export default format_currency;





 

