let invoices=[
    {
        name: "Santamonica",
        number: "2000",
        Amount: "345",
        due: "12/12/2000"
    },
    {
        name :"Global Education",
        number:"2002",
        Amount:"456",
        due:"04/03/2002"
    },
    {
        name:"Dot Co",
        number:"2005",
        Amount:"923",
        due:"23/06/2005",
    },
    {
        name:"Special 10",
        number:"2010",
        Amount:"693",
        due:"18/06/2010",
    },
]
export function getInvoices()
{
    return invoices;
}
export function getInvoice(number){
    return invoices.find(
    invoice => invoice.number === number
    );
}

