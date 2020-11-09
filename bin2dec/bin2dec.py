# 0   1  1  0  0 0 0 0 
# 128 64 32 16 8 4 2 1


def convert(binary):
  values = [128, 64, 32, 16, 8, 4, 2 ,1]
  valueBinary =[]
  for i in range( 8):
    if(binary[i] == '1'):
      valueBinary.append(values[i])

  value = 0
  for i in range(len(valueBinary)):
    value = value + valueBinary[i]
  return value