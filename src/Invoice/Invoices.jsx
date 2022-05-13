import { useParams } from "react-router-dom";
import { getInvoice } from './Data';
          
export default function Invoices() {
<p>Hello</p>
let params = useParams();
let invoice = getInvoice(parseInt(params.invoiceId));
  return (
      <main style={{ padding: "1rem" }}>
          <h2>Total Due: {invoice.Amount}</h2>
          <p>
              {invoice.name}: {invoice.number}
          </p>
          <p>Due Date: {invoice.due}</p>
      </main>
  );
}
         