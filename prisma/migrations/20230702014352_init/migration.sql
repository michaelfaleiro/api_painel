-- CreateTable
CREATE TABLE "Remessa" (
    "id" UUID NOT NULL,
    "numeroPedido" INTEGER NOT NULL,
    "numeroNfe" INTEGER NOT NULL,
    "dataPedido" TIMESTAMP(3) NOT NULL,
    "nomeCliente" TEXT NOT NULL,
    "emailCliente" TEXT NOT NULL,

    CONSTRAINT "Remessa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produto" (
    "id" UUID NOT NULL,
    "sku" TEXT NOT NULL,
    "nomeProduto" TEXT NOT NULL,
    "quantidade" TEXT NOT NULL,
    "remessaId" UUID,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_remessaId_fkey" FOREIGN KEY ("remessaId") REFERENCES "Remessa"("id") ON DELETE SET NULL ON UPDATE CASCADE;
