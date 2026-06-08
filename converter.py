import sys

value = float(sys.argv[1])
conversion = sys.argv[2]

if conversion == "km_to_m":
    result = value * 1000

elif conversion == "m_to_km":
    result = value / 1000

elif conversion == "kg_to_g":
    result = value * 1000

elif conversion == "g_to_kg":
    result = value / 1000

elif conversion == "c_to_f":
    result = (value * 9/5) + 32

elif conversion == "f_to_c":
    result = (value - 32) * 5/9

else:
    result = "Invalid conversion"

print(result)