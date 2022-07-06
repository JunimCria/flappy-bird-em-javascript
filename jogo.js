console.log('Flappy Bird dos cria');
const sprites = new Image();
sprites.src = 'sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

const player = {
    spriteX: 0,
    spritey: 0,
    largura: 33,
    altura: 24,
    x: 33,
    y: 24,
    gravidade: 0.25,
    velocidade: 0,

    atualiza(){
        player.velocidade = player.velocidade + player.gravidade;
        player.y = player.y + player.velocidade;
        console.log(player.velocidade);

    },
    desenha() {
        contexto.drawImage(
            sprites,
            player.spriteX, player.spritey, //sprite x e sprite y
            player.largura, player.altura, // tamanho do recorte na sprite
            player.x, player.y, // onde vai ficar no canvas
            player.largura, player.altura // tamano do sprite no canvas
        );
    }
}
const chao = {
    spriteX: 0,
    spritey: 610,
    largura: 224,
    altura: 112,
    x: 0,
    y: canvas.height - 112,

    desenha() {
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spritey, //sprite x e sprite y
            chao.largura, chao.altura, // tamanho do recorte na sprite
            chao.x, chao.y, // onde vai ficar no canvas
            chao.largura, chao.altura // tamano do sprite no canvas
        );
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spritey, //sprite x e sprite y
            chao.largura, chao.altura, // tamanho do recorte na sprite
            (chao.x + chao.largura), chao.y, // onde vai ficar no canvas
            chao.largura, chao.altura // tamano do sprite no canvas
        );
    }

}
const background = {
    spriteX: 390,
    spritey: 0,
    largura: 275,
    altura: 204,
    x: 0,
    y: canvas.height - 204,


    desenha() {
        contexto.fillStyle = '#70c5ce';
        contexto.fillRect(0, 0, canvas.width, canvas.height)

        contexto.drawImage(
            sprites,
            background.spriteX, background.spritey, //sprite x e sprite y
            background.largura, background.altura, // tamanho do recorte na sprite
            background.x, background.y, // onde vai ficar no canvas
            background.largura, background.altura // tamano do sprite no canvas
        );
        contexto.drawImage(
            sprites,
            background.spriteX, background.spritey, //sprite x e sprite y
            background.largura, background.altura, // tamanho do recorte na sprite
            (background.x + background.largura), background.y, // onde vai ficar no canvas
            background.largura, background.altura // tamano do sprite no canvas
        );
    }
}

function loop() {
    player.atualiza();


    background.desenha();
    chao.desenha();
    player.desenha();
    requestAnimationFrame(loop);
};
loop();