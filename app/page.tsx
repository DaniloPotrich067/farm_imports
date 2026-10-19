
import {
  ShoppingCart,
  MessageCircle,
  ArrowRight,
  Plus,
  Heart,
} from "lucide-react";

import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-3xl space-y-10">
        <header className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">
            SITE CHIBENGAS
          </p>

          <h1 className="text-3xl font-bold tracking-tight">
            Componentes da loja
          </h1>

          <p className="text-muted-foreground">
            Teste de botões para catálogo e orçamento.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">
            Ações principais
          </h2>

          <div className="flex flex-wrap gap-3">
            <Button size="lg">
              <ShoppingCart />
              Adicionar ao carrinho
            </Button>

            <Button variant="whatsapp" size="lg">
              <MessageCircle />
              Pedir orçamento
            </Button>

            <Button variant="cart" size="lg">
              Finalizar pedido
              <ArrowRight />
            </Button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">
            Tamanhos
          </h2>

          <div className="flex flex-wrap items-center gap-3">
            <Button size="xs">Extra pequeno</Button>
            <Button size="sm">Pequeno</Button>
            <Button size="default">Padrão</Button>
            <Button size="lg">Grande</Button>
            <Button size="xl">Extra grande</Button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">
            Variações
          </h2>

          <div className="flex flex-wrap gap-3">
            <Button>Principal</Button>
            <Button variant="secondary">Secundário</Button>
            <Button variant="outline">Contornado</Button>
            <Button variant="ghost">Discreto</Button>
            <Button variant="destructive">Excluir</Button>
            <Button variant="link">Ver detalhes</Button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold">
            Ícones
          </h2>

          <div className="flex items-center gap-3">
            <Button size="icon" variant="outline" aria-label="Adicionar ao carrinho">
              <ShoppingCart />
            </Button>

            <Button size="icon" variant="outline" aria-label="Adicionar aos favoritos">
              <Heart />
            </Button>

            <Button size="icon" variant="outline" aria-label="Adicionar unidade">
              <Plus />
            </Button>
          </div>
        </section>

        <section className="max-w-sm rounded-xl border p-5">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              EXEMPLO DE PRODUTO
            </p>

            <h2 className="text-xl font-semibold">
              Produto demonstrativo
            </h2>

            <p className="text-2xl font-bold">
              R$ 89,90
            </p>
          </div>

          <div className="mt-5 grid gap-3">
            <Button className="w-full" size="lg">
              <ShoppingCart />
              Adicionar ao carrinho
            </Button>

            <Button
              className="w-full"
              variant="whatsapp"
              size="lg"
            >
              <MessageCircle />
              Solicitar orçamento
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
