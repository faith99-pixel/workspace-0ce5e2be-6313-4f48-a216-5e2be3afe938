with open('/home/z/my-project/src/components/zzb/HeroSection.tsx', 'r') as f:
    content = f.read()
    lines = content.split('\n')
    for i in range(34, 38):
        line = lines[i]
        print(f'Line {i+1} ({len(line)} chars):')
        for j, ch in enumerate(line):
            code = ord(ch)
            if code > 127:
                print(f'  pos {j}: U+{code:04X} = {repr(ch)}')
        print()