x = 5        
y = 3.14     
ism = "Ali"

print(type(x))      
print(type(y))      
print(type(ism))




x = 10
y = 5

if x > y:
    print("x y dan katta")
else:
    print("x y dan kichik yoki teng")





son = 15

if son > 0:
    print("Musbat son")
elif son < 0:
    print("Manfiy son")
else:
    print("Son nolga teng")




raqamlar = [1, 2, 3, 4, 5]
for raqam in raqamlar:
    print(raqam)

for i in range(5):
    print(i)


# qaytaruvchi funksiya
def kvadrat(son):
    return son ** 2

natija = kvadrat(4)  # natija = 16
print(natija)




import math
print(math.sqrt(16))
print(math.pi)



# random moduli - tasodifiy sonlar
import random
print(random.randint(1, 10))



from math import sqrt
print(sqrt(25))


