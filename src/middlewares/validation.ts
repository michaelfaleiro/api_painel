import * as yup from "yup";

interface IRemessa {
  numeroPedido: number;
  dataPedido: Date;
  numeroNfe: number;
  nomeCliente: string;
  emailCliente: string;
}

const bodyValidation = yup.object().shape({
  numeroPedido: yup.number().defined(),
  dataPedido: yup.date().defined(),
  numeroNfe: yup.number().defined(),
  nomeCliente: yup.string().defined(),
  emailCliente: yup.string().defined().email(),
});

export { bodyValidation };
