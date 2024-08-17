import math

def is_triangle_valid(a, b, c):
    # Uchburchak tengsizliklari sharti
    return a + b > c and a + c > b and b + c > a

def calculate_triangle_area(a, b, c):
    # Geron formulasidan foydalangan holda uchburchak yuzini topish
    s = (a + b + c) / 2  # Yarim perimetr
    area = math.sqrt(s * (s - a) * (s - b) * (s - c))
    return area

# Foydalanuvchidan uchburchak tomonlarini so'raymiz
a = float(input("1-tomon uzunligini kiriting: "))
b = float(input("2-tomon uzunligini kiriting: "))
c = float(input("3-tomon uzunligini kiriting: "))

# Uchburchakni yasash mumkinligini tekshirish
if is_triangle_valid(a, b, c):
    area = calculate_triangle_area(a, b, c)
    print(f"Bu tomonlar bilan uchburchak yasash mumkin. Uchburchakning yuzi: {area}")
else:
    print("Bu tomonlar bilan uchburchak yasash mumkin emas.")