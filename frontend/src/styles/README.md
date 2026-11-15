# Estilos e temas

- `tokens.css` mapeia os tokens semânticos para as utilities do Tailwind e do shadcn.
- `themes.css` contém os valores de cada tema. `basalt` (“Basalt”) é o tema atual; `mint` (“Brisa de menta”) também está disponível.
- `components.css` guarda regras compartilhadas que dependem desses tokens.
- `index.css` importa os estilos na ordem usada pelo frontend.

Para trocar o tema inicial, altere o atributo `data-theme` em `index.html` para
`basalt` ou `mint`. Para criar outro tema, adicione um bloco
`[data-theme='nome']` em `themes.css` com os mesmos tokens.

Componentes devem usar nomes semânticos como `bg-card`, `text-muted-foreground`,
`text-status-warning` ou `var(--chart-1)`. Não adicione hexadecimais ou cores de
paleta do Tailwind em componentes; inclua o novo papel visual nos tokens e no tema.
