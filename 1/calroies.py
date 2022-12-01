        
    
def main():
    vals = []
    file = open("./1/input.txt","r")
    for index, line in enumerate(file):
        vals.append(line.strip())
    print(vals)
    elf_cals = [0]
    cal_index = 0
    for i in range(len(vals)):
        print(i,vals[i])
        if (vals[i] != ''):
            elf_cals[cal_index] += int(vals[i]);
        else:
            cal_index += 1
            elf_cals.append(0)
    max_cals = max(elf_cals)
    index_1 = elf_cals.index(max_cals)
    elf_cals.pop(index_1)
    max_cals2 = max(elf_cals)
    index_2 = elf_cals.index(max_cals2)
    elf_cals.pop(index_2)
    max_cals3 = max(elf_cals)
    print(max_cals)
    print(max_cals2)
    print(max_cals3)
    print("SUM: ",max_cals+max_cals2+max_cals3)
    print("Hello World!")
    
    
if __name__ == '__main__':
    main()