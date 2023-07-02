-- CreateTable
CREATE TABLE "Remessa" (
    "id" TEXT NOT NULL,
    "numeroPedido" INTEGER NOT NULL,
    "numeroNfe" INTEGER NOT NULL,
    "dataPedido" TIMESTAMP(3) NOT NULL,
    "nomeCliente" TEXT NOT NULL,
    "emailCliente" TEXT NOT NULL,

    CONSTRAINT "Remessa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produto" (
    "id" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "nomeProduto" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "remessaId" TEXT,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_remessaId_fkey" FOREIGN KEY ("remessaId") REFERENCES "Remessa"("id") ON DELETE SET NULL ON UPDATE CASCADE;
