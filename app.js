function tax(value)
{
    let tax = value * (7/100)
    return tax.toFixed(2) + " Bath";
}
function taxplus(value)
{
    let taxplus = (value * (7/100)) - (value * (3/100))
    return taxplus.toFixed(2) + " Bath";
}
function showtax(value)
{
    alert(tax(value))
}
function showtaxplus(value)
{
    alert(taxplus(value))
}
