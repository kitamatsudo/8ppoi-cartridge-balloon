export class Cartridge {
  static onReset({ pads, speakers, screens }) {
    this.pads = pads;
    this.speakers = speakers;
    this.screens = screens;

    // 画面設定
    this.SCREEN_WIDTH = 256;
    this.SCREEN_HEIGHT = 192;
    this.screens[0].setViewBox(0, 0, this.SCREEN_WIDTH, this.SCREEN_HEIGHT);

    // 物理定数
    this.GRAVITY = 0.04;
    this.LIFT = -0.12;
    this.MAX_FALL = 1.5;
    this.MAX_RISE = -1.2;
    this.MOVE_SPEED = 0.8;
    this.AIR_RESISTANCE = 0.98;

    // スプライトパターン
    this.playerPattern = [
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 3, 4, 3, 3, 4, 3, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 3, 3, 0, 0, 3, 3, 0, 0, 0, 0, 0],
    ];

    // 敵パターン（緑バルーン）
    this.enemyPattern = [
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 3, 4, 3, 3, 4, 3, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 3, 3, 0, 0, 3, 3, 0, 0, 0, 0, 0],
    ];

    // 落下中の敵パターン（バルーンなし）
    this.fallingEnemyPattern = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 2, 1, 1, 2, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    ];

    this.player = this.screens[0].addSprite(this.playerPattern, {
      colorIds: [null, 1, 15, 9, 15],
    });

    this.player.x = this.SCREEN_WIDTH / 2 - 8;
    this.player.y = this.SCREEN_HEIGHT / 2;
    this.player.vx = 0;
    this.player.vy = 0;

    // ゲーム状態
    this.isGameover = false;

    // 敵リスト
    this.enemies = [];
    this.spawnEnemy();
    this.spawnEnemy();
  }

  static restart() {
    // プレイヤーをリセット
    this.player.clear();
    this.player.setPattern(this.playerPattern, {
      colorIds: [null, 1, 15, 9, 15],
    });
    this.player.x = this.SCREEN_WIDTH / 2 - 8;
    this.player.y = this.SCREEN_HEIGHT / 2;
    this.player.vx = 0;
    this.player.vy = 0;
    this.isGameover = false;

    // 敵をリセット
    this.enemies.forEach((e) => e.remove());
    this.enemies = [];
    this.spawnEnemy();
    this.spawnEnemy();
  }

  static spawnEnemy() {
    const enemy = this.screens[0].addSprite(this.enemyPattern, {
      colorIds: [null, 10, 15, 8, 15], // 緑バルーン、茶色の体
    });
    enemy.x = Math.random() * (this.SCREEN_WIDTH - 16);
    enemy.y = Math.random() * (this.SCREEN_HEIGHT / 2);
    enemy.vx = (Math.random() - 0.5) * 0.5;
    enemy.vy = 0;
    enemy.alive = true;
    enemy.falling = false;
    this.enemies.push(enemy);
  }

  static playFlapSound() {
    this.sfx?.stop();
    this.sfx = this.speakers[0].play([
      [{ noteNumber: 20 + Math.floor(Math.random() * 4), duration: 1 }],
    ]);
  }

  static playPopSound() {
    this.sfx?.stop();
    this.sfx = this.speakers[0].play([
      [{ noteNumber: 30, duration: 2 }, { noteNumber: 20, duration: 4 }],
    ]);
  }

  static onFrame() {
    const pad = this.pads[0].buttons;

    if (this.isGameover) {
      // 落下処理
      this.player.vy += this.GRAVITY * 2;
      this.player.y += this.player.vy;

      // リスタート
      if (pad.b0.justPressed && this.player.y > this.SCREEN_HEIGHT) {
        this.restart();
      }
      return;
    }

    // 左右移動
    if (pad.left.pressed) {
      this.player.vx -= 0.1;
    }
    if (pad.right.pressed) {
      this.player.vx += 0.1;
    }

    // 上昇
    if (pad.b0.pressed) {
      this.player.vy += this.LIFT;
      if (pad.b0.justPressed) {
        this.playFlapSound();
      }
    }

    // 重力
    this.player.vy += this.GRAVITY;

    // 速度制限
    this.player.vx *= this.AIR_RESISTANCE;
    if (this.player.vy > this.MAX_FALL) this.player.vy = this.MAX_FALL;
    if (this.player.vy < this.MAX_RISE) this.player.vy = this.MAX_RISE;
    if (this.player.vx > this.MOVE_SPEED) this.player.vx = this.MOVE_SPEED;
    if (this.player.vx < -this.MOVE_SPEED) this.player.vx = -this.MOVE_SPEED;

    // 位置更新
    this.player.x += this.player.vx;
    this.player.y += this.player.vy;

    // 画面端処理（ループ）
    if (this.player.x < -16) this.player.x = this.SCREEN_WIDTH;
    if (this.player.x > this.SCREEN_WIDTH) this.player.x = -16;

    // 上下の制限
    if (this.player.y < 0) {
      this.player.y = 0;
      this.player.vy = 0;
    }
    if (this.player.y > this.SCREEN_HEIGHT - 16) {
      this.player.y = this.SCREEN_HEIGHT - 16;
      this.player.vy = 0;
    }

    // 敵の更新
    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const enemy = this.enemies[i];

      if (enemy.falling) {
        // 落下中
        enemy.vy += this.GRAVITY * 2;
        enemy.y += enemy.vy;
        if (enemy.y > this.SCREEN_HEIGHT) {
          enemy.remove();
          this.enemies.splice(i, 1);
          this.spawnEnemy();
        }
      } else {
        // 浮遊中
        enemy.vy += this.GRAVITY;
        enemy.vy += this.LIFT * 0.3; // 自動で浮く
        enemy.x += enemy.vx;
        enemy.y += enemy.vy;

        // 画面端ループ
        if (enemy.x < -16) enemy.x = this.SCREEN_WIDTH;
        if (enemy.x > this.SCREEN_WIDTH) enemy.x = -16;

        // 上下制限
        if (enemy.y < 0) {
          enemy.y = 0;
          enemy.vy = 0.5;
        }
        if (enemy.y > this.SCREEN_HEIGHT - 32) {
          enemy.y = this.SCREEN_HEIGHT - 32;
          enemy.vy = -0.5;
        }

        // ランダムに方向転換
        if (Math.random() < 0.01) {
          enemy.vx = (Math.random() - 0.5) * 0.8;
        }
      }

      // 当たり判定
      if (enemy.alive && !this.isGameover) {
        const dx = (this.player.x + 8) - (enemy.x + 8);
        const dy = (this.player.y + 8) - (enemy.y + 8);
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 14) {
          if (this.player.y < enemy.y - 4) {
            // プレイヤーが上にいれば敵を倒す
            enemy.alive = false;
            enemy.falling = true;
            enemy.vy = 0;
            enemy.clear();
            enemy.setPattern(this.fallingEnemyPattern, {
              colorIds: [null, 8, 15],
            });
            this.player.vy = -1.5;
            this.playPopSound();
          } else if (enemy.y < this.player.y - 4) {
            // 敵が上にいればプレイヤーがやられる
            this.gameOver();
          }
        }
      }
    }
  }

  static gameOver() {
    this.isGameover = true;
    this.player.clear();
    this.player.setPattern(this.fallingEnemyPattern, {
      colorIds: [null, 9, 15],
    });
    this.playDeathSound();
  }

  static playDeathSound() {
    this.sfx?.stop();
    this.sfx = this.speakers[0].play([
      [
        { noteNumber: 20, duration: 4 },
        { noteNumber: 16, duration: 4 },
        { noteNumber: 12, duration: 4 },
        { noteNumber: 8, duration: 8 },
      ],
    ]);
  }
}
