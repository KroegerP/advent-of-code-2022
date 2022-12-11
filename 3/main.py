        
    
def main():
    vals = []
    # compartment_lengths = []
    builder_string = ''
    splitting_indices = []
    builder_index = 0
    priority_sum = 0
    counter = 0
    actual_items = []
    file = open("./input.txt","r")
    for index, line in enumerate(file):
        
        possible_items = set()
        if builder_index < 2:
            builder_string = builder_string + line.strip()
            builder_index += 1
            splitting_indices.append(len(builder_string))
        else: 
            counter += 1
            print(priority_sum)
            matching_vals = set()
            builder_index = 0
            new_val = builder_string + line.strip()
            # splitting_indices.append(len(new_val))
            builder_string = ''
            vals.append(new_val)
            # print(new_val)
            # compartment_lengths.append(int(len(vals[-1]) / 2))
            # print(splitting_indices)
            print(index)
            print(new_val[:splitting_indices[0]])
            print(new_val[splitting_indices[0]:splitting_indices[1]])
            print(new_val[splitting_indices[1]:])
            for item in new_val[:splitting_indices[0]]:
                possible_items.add(item)
            # print(possible_items)
            for item in new_val[splitting_indices[0]:splitting_indices[1]]:
                if item in possible_items:
                    matching_vals.add(item)
            # print(matching_vals)
            for item in new_val[splitting_indices[1]:]:
                if item in matching_vals:
                    print(item)
                    actual_items.append(item)
                    break
            splitting_indices = []
    # val = vals[0]
    # print(compartment_lengths[0])
    # print(val[:compartment_lengths[0]])
    # print(val[compartment_lengths[0]:])
    print(actual_items)
    print("COUNTER", counter)
    for index, m_val in enumerate(actual_items):
        # print(m_val)
        if m_val == 'a':
            priority_sum += 1
        elif m_val == 'b':
            priority_sum += 2
        elif m_val == 'c':
            priority_sum += 3
        elif m_val == 'd':
            priority_sum += 4
        elif m_val == 'e':
            priority_sum += 5
        elif m_val == 'f':
            priority_sum += 6
        elif m_val == 'g':
            priority_sum += 7
        elif m_val == 'h':
            priority_sum += 8
        elif m_val == 'i':
            priority_sum += 9
        elif m_val == 'j':
            priority_sum += 10
        elif m_val == 'k':
            priority_sum += 11
        elif m_val == 'l':
            priority_sum += 12
        elif m_val == 'm':
            priority_sum += 13
        elif m_val == 'n':
            priority_sum += 14
        elif m_val == 'o':
            priority_sum += 15
        elif m_val == 'p':
            priority_sum += 16
        elif m_val == 'q':
            priority_sum += 17
        elif m_val == 'r':
            priority_sum += 18
        elif m_val == 's':
            priority_sum += 19
        elif m_val == 't':
            priority_sum += 20
        elif m_val == 'u':
            priority_sum += 21
        elif m_val == 'v':
            priority_sum += 22
        elif m_val == 'w':
            priority_sum += 23
        elif m_val == 'x':
            priority_sum += 24
        elif m_val == 'y':
            priority_sum += 25
        elif m_val == 'z':
            priority_sum += 26
        elif m_val == 'A':
            priority_sum += 27
        elif m_val == 'B':
            priority_sum += 28
        elif m_val == 'C':
            priority_sum += 29
        elif m_val == 'D':
            priority_sum += 30
        elif m_val == 'E':
            priority_sum += 31
        elif m_val == 'F':
            priority_sum += 32
        elif m_val == 'G':
            priority_sum += 33
        elif m_val == 'H':
            priority_sum += 34
        elif m_val == 'I':
            priority_sum += 35
        elif m_val == 'J':
            priority_sum += 36
        elif m_val == 'K':
            priority_sum += 37
        elif m_val == 'L':
            priority_sum += 38
        elif m_val == 'M':
            priority_sum += 39
        elif m_val == 'N':
            priority_sum += 40
        elif m_val == 'O':
            priority_sum += 41
        elif m_val == 'P':
            priority_sum += 42
        elif m_val == 'Q':
            priority_sum += 43
        elif m_val == 'R':
            priority_sum += 44
        elif m_val == 'S':
            priority_sum += 45
        elif m_val == 'T':
            priority_sum += 46
        elif m_val == 'U':
            priority_sum += 47
        elif m_val == 'V':
            priority_sum += 48
        elif m_val == 'W':
            priority_sum += 49
        elif m_val == 'X':
            priority_sum += 50
        elif m_val == 'Y':
            priority_sum += 51
        elif m_val == 'Z':
            priority_sum += 52
    print(priority_sum)

    
    
if __name__ == '__main__':
    main()