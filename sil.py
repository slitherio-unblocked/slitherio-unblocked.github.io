import os
import re

# Dosyaların bulunduğu klasör
klasor_yolu = 'html/'

# Klasördeki tüm dosyaları al
dosya_listesi = os.listdir(klasor_yolu)

# Her bir dosya için işlem yap
for dosya_adi in dosya_listesi:
    dosya_yolu = os.path.join(klasor_yolu, dosya_adi)

    # Dosyayı aç ve içeriği temizle
    with open(dosya_yolu, 'r') as dosya:
        icerik = dosya.read()

    # İçeriği temizle
    baslangic = '<div id="bgames-game-btf-bottom">'
    bitis = '</div>'
    temizlenmis_icerik = re.sub(rf'{re.escape(baslangic)}.*?{re.escape(bitis)}', f'{baslangic}{bitis}', icerik, flags=re.DOTALL)

    # Dosyayı güncelle
    with open(dosya_yolu, 'w') as dosya:
        dosya.write(temizlenmis_icerik)

print("Tüm dosyalar işlendi.")