/* Daily Math Challenge — Puzzle Bank */

function _int(s, n) {
  const pre = '(?<![0-9])';
  const post = '(?![0-9./])';
  const pat = n < 0 ? pre + '\\-' + Math.abs(n) + post : pre + n + post;
  return new RegExp(pat).test(s);
}
function _frac(s, p, q) {
  if (s.includes(p + '/' + q)) return true;
  const val = parseFloat(s);
  return !isNaN(val) && Math.abs(val - p / q) < 0.02;
}
function _approx(s, val, tol) {
  tol = tol || 0.02;
  const v = parseFloat(s.replace(/[^0-9.\-]/g, ''));
  return !isNaN(v) && Math.abs(v - val) < tol;
}

const PUZZLE_BANK = {

  /* ══════════════════════════════════════════════════════
     STANDARD  (ids 1–30)
  ══════════════════════════════════════════════════════ */
  standard: [

    /* — Quadratics 1–6 — */
    {
      id:1, topic:'Quadratics',
      label:"Today's Standard Challenge", instruction:'Solve for x:',
      equation:'x² − 5x + 6 = 0', color:'#27ae60',
      solution:[
        'Identify a = 1, b = −5, c = 6',
        'Find two numbers that multiply to 6 and add to −5: they are −2 and −3',
        'Factor: (x − 2)(x − 3) = 0',
        'Apply zero product property: x − 2 = 0 or x − 3 = 0',
        'Solutions: x = 2 and x = 3'
      ],
      hint1:'Try factoring — look for two numbers that multiply to 6 and add to −5.',
      hint2:'The two numbers are −2 and −3, giving (x − 2)(x − 3) = 0.',
      check(s) { return _int(s,2) && _int(s,3); }
    },

    {
      id:2, topic:'Quadratics',
      label:"Today's Standard Challenge", instruction:'Solve for x:',
      equation:'2x² + x − 3 = 0', color:'#27ae60',
      solution:[
        'Look for factor pairs of 2×(−3) = −6 that add to 1: they are 3 and −2',
        'Rewrite: 2x² + 3x − 2x − 3 = 0',
        'Factor by grouping: x(2x + 3) − 1(2x + 3) = 0',
        'Factor: (2x + 3)(x − 1) = 0',
        'Solutions: x = 1 or x = −3/2'
      ],
      hint1:'Multiply a·c = 2·(−3) = −6 and find two factors that add to b = 1.',
      hint2:'Split the middle term using 3 and −2, then factor by grouping.',
      check(s) { return _int(s,1) && (s.includes('-3/2') || s.includes('-1.5') || _approx(s,-1.5)); }
    },

    {
      id:3, topic:'Quadratics',
      label:"Today's Standard Challenge", instruction:'Solve for x:',
      equation:'x² + 4x + 4 = 0', color:'#27ae60',
      solution:[
        'Recognise this as a perfect square trinomial',
        'Check: (x + 2)² = x² + 4x + 4 ✓',
        'So the equation becomes (x + 2)² = 0',
        'Take the square root: x + 2 = 0',
        'Solution: x = −2 (double root)'
      ],
      hint1:'Check whether the trinomial is a perfect square.',
      hint2:'x² + 4x + 4 = (x + 2)², giving a repeated root.',
      check(s) { return _int(s,-2); }
    },

    {
      id:4, topic:'Quadratics',
      label:"Today's Standard Challenge", instruction:'Solve for x:',
      equation:'3x² − 7x + 2 = 0', color:'#27ae60',
      solution:[
        'Multiply a·c = 3·2 = 6; find factors that add to −7: −6 and −1',
        'Rewrite: 3x² − 6x − x + 2 = 0',
        'Factor by grouping: 3x(x − 2) − 1(x − 2) = 0',
        'Factor: (3x − 1)(x − 2) = 0',
        'Solutions: x = 1/3 or x = 2'
      ],
      hint1:'Multiply a·c = 6 and look for two numbers that add to −7.',
      hint2:'Splitting −7x into −6x − x allows factoring by grouping.',
      check(s) { return _int(s,2) && (_frac(s,1,3) || _approx(s,1/3)); }
    },

    {
      id:5, topic:'Quadratics',
      label:"Today's Standard Challenge", instruction:'Solve for x:',
      equation:'x² − 9 = 0', color:'#27ae60',
      solution:[
        'Recognise as a difference of two squares: x² − 3² = 0',
        'Factor: (x − 3)(x + 3) = 0',
        'Apply zero product property: x − 3 = 0 or x + 3 = 0',
        'Solve each: x = 3 or x = −3',
        'Solution: x = ±3'
      ],
      hint1:'Write 9 as 3² and recognise the difference of squares pattern.',
      hint2:'a² − b² = (a − b)(a + b), so x² − 9 = (x − 3)(x + 3).',
      check(s) { return _int(s,3) && _int(s,-3); }
    },

    {
      id:6, topic:'Quadratics',
      label:"Today's Standard Challenge", instruction:'Solve for x:',
      equation:'x² − 2x − 8 = 0', color:'#27ae60',
      solution:[
        'Find two numbers that multiply to −8 and add to −2: 2 and −4',
        'Factor: (x + 2)(x − 4) = 0',
        'Apply zero product property: x + 2 = 0 or x − 4 = 0',
        'Solve each: x = −2 or x = 4',
        'Solutions: x = −2 and x = 4'
      ],
      hint1:'Look for two numbers that multiply to −8 and add to −2.',
      hint2:'The numbers are 2 and −4, giving (x + 2)(x − 4) = 0.',
      check(s) { return _int(s,4) && _int(s,-2); }
    },

    /* — Simultaneous Equations 7–12 — */
    {
      id:7, topic:'Simultaneous Equations',
      label:"Today's Standard Challenge", instruction:'Solve the system:',
      equation:'2x + y = 7\nx − y = 2', color:'#27ae60',
      solution:[
        'Add the two equations to eliminate y: (2x + y) + (x − y) = 7 + 2',
        'Simplify: 3x = 9, so x = 3',
        'Substitute x = 3 into the second equation: 3 − y = 2',
        'Solve: y = 1',
        'Solution: x = 3, y = 1'
      ],
      hint1:'Try adding or subtracting the equations to eliminate one variable.',
      hint2:'Adding both equations eliminates y immediately.',
      check(s) { return _int(s,3) && _int(s,1); }
    },

    {
      id:8, topic:'Simultaneous Equations',
      label:"Today's Standard Challenge", instruction:'Solve the system:',
      equation:'x + y = 5\n2x + 3y = 12', color:'#27ae60',
      solution:[
        'From equation 1: x = 5 − y',
        'Substitute into equation 2: 2(5 − y) + 3y = 12',
        'Expand: 10 − 2y + 3y = 12, so y = 2',
        'Substitute back: x = 5 − 2 = 3',
        'Solution: x = 3, y = 2'
      ],
      hint1:'Express x from the first equation and substitute into the second.',
      hint2:'x = 5 − y, then substitute to get a single equation in y.',
      check(s) { return _int(s,3) && _int(s,2); }
    },

    {
      id:9, topic:'Simultaneous Equations',
      label:"Today's Standard Challenge", instruction:'Solve the system:',
      equation:'x + 2y = 10\n3x − y = 9', color:'#27ae60',
      solution:[
        'From equation 2: y = 3x − 9',
        'Substitute into equation 1: x + 2(3x − 9) = 10',
        'Expand: x + 6x − 18 = 10, so 7x = 28, giving x = 4',
        'Substitute back: y = 3(4) − 9 = 3',
        'Solution: x = 4, y = 3'
      ],
      hint1:'Rearrange one equation to express y in terms of x, then substitute.',
      hint2:'From the second equation: y = 3x − 9.',
      check(s) { return _int(s,4) && _int(s,3); }
    },

    {
      id:10, topic:'Simultaneous Equations',
      label:"Today's Standard Challenge", instruction:'Solve the system:',
      equation:'5x + 2y = 16\nx + y = 5', color:'#27ae60',
      solution:[
        'From equation 2: y = 5 − x',
        'Substitute into equation 1: 5x + 2(5 − x) = 16',
        'Expand: 5x + 10 − 2x = 16, so 3x = 6, giving x = 2',
        'Substitute back: y = 5 − 2 = 3',
        'Solution: x = 2, y = 3'
      ],
      hint1:'Isolate y from the simpler equation, then substitute.',
      hint2:'From equation 2: y = 5 − x. Substitute into equation 1.',
      check(s) { return _int(s,2) && _int(s,3); }
    },

    {
      id:11, topic:'Simultaneous Equations',
      label:"Today's Standard Challenge", instruction:'Solve the system:',
      equation:'x + y = 6\n2x − 3y = 2', color:'#27ae60',
      solution:[
        'From equation 1: x = 6 − y',
        'Substitute into equation 2: 2(6 − y) − 3y = 2',
        'Expand: 12 − 2y − 3y = 2, so −5y = −10, giving y = 2',
        'Substitute back: x = 6 − 2 = 4',
        'Solution: x = 4, y = 2'
      ],
      hint1:'Express x from the first equation and substitute into the second.',
      hint2:'x = 6 − y, leading to −5y = −10.',
      check(s) { return _int(s,4) && _int(s,2); }
    },

    {
      id:12, topic:'Simultaneous Equations',
      label:"Today's Standard Challenge", instruction:'Solve the system:',
      equation:'3x + y = 12\nx + 3y = 12', color:'#27ae60',
      solution:[
        'Subtract equation 2 from equation 1: (3x + y) − (x + 3y) = 0',
        'Simplify: 2x − 2y = 0, so x = y',
        'Substitute x = y into equation 1: 3y + y = 12, so 4y = 12',
        'Solve: y = 3, therefore x = 3',
        'Solution: x = 3, y = 3'
      ],
      hint1:'Subtract one equation from the other to eliminate a variable.',
      hint2:'Subtracting gives 2x − 2y = 0, so x = y.',
      check(s) { return _int(s,3) && (s.match(/3/g)||[]).length >= 2; }
    },

    /* — Trigonometry 13–18 — */
    {
      id:13, topic:'Trigonometry',
      label:"Today's Standard Challenge", instruction:'Solve for x ∈ [0, 2π]:',
      equation:'2 sin(x) − 1 = 0', color:'#27ae60',
      solution:[
        'Rearrange: sin(x) = 1/2',
        'Recall the unit circle: sin is positive in quadrants I and II',
        'Reference angle: sin(π/6) = 1/2, so x = π/6',
        'Second solution in QII: x = π − π/6 = 5π/6',
        'Solutions: x = π/6 and x = 5π/6 (i.e. 30° and 150°)'
      ],
      hint1:'Isolate sin(x) first: sin(x) = 1/2.',
      hint2:'sin is 1/2 at 30° (π/6) and also at 150° (5π/6) in [0, 2π].',
      check(s) {
        const piForm = (s.includes('π/6') || s.includes('pi/6')) &&
                       (s.includes('5π/6') || s.includes('5pi/6'));
        const degForm = _int(s,30) && _int(s,150);
        return piForm || degForm;
      }
    },

    {
      id:14, topic:'Trigonometry',
      label:"Today's Standard Challenge", instruction:'Find cos(x) given:',
      equation:'sin(x) = 4/5,  0 < x < π/2', color:'#27ae60',
      solution:[
        'Use the Pythagorean identity: sin²(x) + cos²(x) = 1',
        'Substitute: (4/5)² + cos²(x) = 1',
        'Simplify: 16/25 + cos²(x) = 1, so cos²(x) = 9/25',
        'Take the positive root (x in Q1): cos(x) = 3/5',
        'Answer: cos(x) = 3/5'
      ],
      hint1:'Use the Pythagorean identity: sin²(x) + cos²(x) = 1.',
      hint2:'cos²(x) = 1 − (4/5)² = 9/25, so cos(x) = 3/5 (positive in Q1).',
      check(s) { return _frac(s,3,5) || _approx(s,0.6); }
    },

    {
      id:15, topic:'Trigonometry',
      label:"Today's Standard Challenge", instruction:'Solve for x ∈ [0, π]:',
      equation:'sin(2x) = 1', color:'#27ae60',
      solution:[
        'Let u = 2x, so we need sin(u) = 1',
        'sin(u) = 1 when u = π/2',
        'Since x ∈ [0, π], u = 2x ∈ [0, 2π]',
        'There is one solution: 2x = π/2',
        'Solution: x = π/4 (i.e. 45°)'
      ],
      hint1:'Substitute u = 2x and solve sin(u) = 1.',
      hint2:'sin = 1 at π/2, so 2x = π/2, giving x = π/4.',
      check(s) {
        return s.includes('π/4') || s.includes('pi/4') || _int(s,45) || _approx(s,Math.PI/4,0.05);
      }
    },

    {
      id:16, topic:'Trigonometry',
      label:"Today's Standard Challenge", instruction:'Evaluate exactly:',
      equation:'sin(π/3) + cos(π/6)', color:'#27ae60',
      solution:[
        'Recall exact values: sin(π/3) = √3/2',
        'Recall exact values: cos(π/6) = √3/2',
        'Add: √3/2 + √3/2 = 2·(√3/2)',
        'Simplify: = √3',
        'Answer: √3'
      ],
      hint1:'Look up or recall the exact values for 60° and 30°.',
      hint2:'Both sin(60°) and cos(30°) equal √3/2, so their sum is √3.',
      check(s) {
        return s.includes('√3') || s.includes('sqrt(3)') || s.includes('sqrt3') || _approx(s,Math.sqrt(3),0.05);
      }
    },

    {
      id:17, topic:'Trigonometry',
      label:"Today's Standard Challenge", instruction:'Solve for x ∈ [0, 2π]:',
      equation:'cos(x) = −1/2', color:'#27ae60',
      solution:[
        'cos(x) = −1/2 is negative, so x is in quadrants II or III',
        'Reference angle: cos(π/3) = 1/2, so reference angle is π/3',
        'Quadrant II solution: x = π − π/3 = 2π/3',
        'Quadrant III solution: x = π + π/3 = 4π/3',
        'Solutions: x = 2π/3 and x = 4π/3 (i.e. 120° and 240°)'
      ],
      hint1:'cos is negative in QII and QIII. The reference angle satisfies cos = 1/2.',
      hint2:'Reference angle = 60° = π/3. Solutions at 120° and 240°.',
      check(s) {
        const piForm = (s.includes('2π/3') || s.includes('2pi/3')) &&
                       (s.includes('4π/3') || s.includes('4pi/3'));
        const degForm = _int(s,120) && _int(s,240);
        return piForm || degForm;
      }
    },

    {
      id:18, topic:'Trigonometry',
      label:"Today's Standard Challenge", instruction:'Evaluate exactly given:',
      equation:'tan(x) = √3,  0 < x < π/2\nFind sin(x)·cos(x)', color:'#27ae60',
      solution:[
        'tan(x) = √3 and 0 < x < π/2 means x = π/3 (60°)',
        'sin(π/3) = √3/2 and cos(π/3) = 1/2',
        'Multiply: sin(x)·cos(x) = (√3/2)·(1/2) = √3/4',
        'Alternatively use the double-angle identity: sin(x)cos(x) = sin(2x)/2',
        'Answer: √3/4'
      ],
      hint1:'tan(x) = √3 in the first quadrant gives x = π/3.',
      hint2:'At x = π/3: sin = √3/2 and cos = 1/2, so their product is √3/4.',
      check(s) {
        return s.includes('√3/4') || s.includes('sqrt(3)/4') ||
               _frac(s,1,4) && false || // avoid matching just 1/4
               _approx(s, Math.sqrt(3)/4, 0.03);
      }
    },

    /* — Logarithms 19–24 — */
    {
      id:19, topic:'Logarithms',
      label:"Today's Standard Challenge", instruction:'Solve for x:',
      equation:'log₂(x) = 4', color:'#27ae60',
      solution:[
        'The equation log₂(x) = 4 means 2⁴ = x',
        'Compute: 2⁴ = 2 × 2 × 2 × 2 = 16',
        'So x = 16',
        'Verify: log₂(16) = log₂(2⁴) = 4 ✓',
        'Solution: x = 16'
      ],
      hint1:'Rewrite log₂(x) = 4 in exponential form: 2⁴ = x.',
      hint2:'2 to the power 4 equals 16.',
      check(s) { return _int(s,16); }
    },

    {
      id:20, topic:'Logarithms',
      label:"Today's Standard Challenge", instruction:'Solve for x:',
      equation:'log(x) + log(x − 3) = 1', color:'#27ae60',
      solution:[
        'Apply the log product rule: log[x(x − 3)] = 1',
        'Rewrite in exponential form (base 10): x(x − 3) = 10',
        'Expand: x² − 3x − 10 = 0',
        'Factor: (x − 5)(x + 2) = 0, giving x = 5 or x = −2',
        'Reject x = −2 (log of negative undefined); Solution: x = 5'
      ],
      hint1:'Use log(a) + log(b) = log(ab) to combine the left side.',
      hint2:'log[x(x−3)] = 1 means x(x−3) = 10; solve the quadratic.',
      check(s) { return _int(s,5); }
    },

    {
      id:21, topic:'Logarithms',
      label:"Today's Standard Challenge", instruction:'Solve for x:',
      equation:'2^(2x − 1) = 8', color:'#27ae60',
      solution:[
        'Write 8 as a power of 2: 8 = 2³',
        'The equation becomes 2^(2x − 1) = 2³',
        'Since bases are equal, equate exponents: 2x − 1 = 3',
        'Solve: 2x = 4, so x = 2',
        'Solution: x = 2'
      ],
      hint1:'Express 8 as a power of 2, then equate the exponents.',
      hint2:'8 = 2³, so 2x − 1 = 3.',
      check(s) { return _int(s,2); }
    },

    {
      id:22, topic:'Logarithms',
      label:"Today's Standard Challenge", instruction:'Simplify:',
      equation:'log₂(8) + log₂(4)', color:'#27ae60',
      solution:[
        'Evaluate log₂(8): 2³ = 8, so log₂(8) = 3',
        'Evaluate log₂(4): 2² = 4, so log₂(4) = 2',
        'Add: 3 + 2 = 5',
        'Alternatively use the product rule: log₂(8 × 4) = log₂(32) = log₂(2⁵) = 5',
        'Answer: 5'
      ],
      hint1:'Convert each logarithm to an exponent: what power of 2 gives 8? gives 4?',
      hint2:'log₂(8) = 3 and log₂(4) = 2.',
      check(s) { return _int(s,5); }
    },

    {
      id:23, topic:'Logarithms',
      label:"Today's Standard Challenge", instruction:'Solve for x:',
      equation:'log₃(x + 6) = 2', color:'#27ae60',
      solution:[
        'Rewrite in exponential form: x + 6 = 3²',
        'Compute: 3² = 9',
        'Solve: x + 6 = 9, so x = 3',
        'Verify: log₃(3 + 6) = log₃(9) = log₃(3²) = 2 ✓',
        'Solution: x = 3'
      ],
      hint1:'Convert the logarithm to exponential form: x + 6 = 3².',
      hint2:'3² = 9, so x = 9 − 6 = 3.',
      check(s) { return _int(s,3); }
    },

    {
      id:24, topic:'Logarithms',
      label:"Today's Standard Challenge", instruction:'Solve for x:',
      equation:'e^(ln x + 2) = 3e²', color:'#27ae60',
      solution:[
        'Use the exponent rule: e^(a+b) = eᵃ · eᵇ',
        'So e^(ln x + 2) = e^(ln x) · e²',
        'Since e^(ln x) = x, this becomes x · e²',
        'Set equal to right side: x · e² = 3e²',
        'Divide both sides by e²: x = 3'
      ],
      hint1:'Split the exponent: e^(ln x + 2) = e^(ln x) · e².',
      hint2:'e^(ln x) = x, so the equation becomes x·e² = 3e².',
      check(s) { return _int(s,3); }
    },

    /* — Functions 25–30 — */
    {
      id:25, topic:'Functions',
      label:"Today's Standard Challenge", instruction:'Calculate:',
      equation:'f(x) = 2x² − 3\nFind f(2)', color:'#27ae60',
      solution:[
        'Substitute x = 2 into f(x) = 2x² − 3',
        'Calculate x²: 2² = 4',
        'Multiply: 2 × 4 = 8',
        'Subtract: 8 − 3 = 5',
        'Answer: f(2) = 5'
      ],
      hint1:'Substitute x = 2 directly into the formula.',
      hint2:'f(2) = 2(2²) − 3 = 2(4) − 3 = 5.',
      check(s) { return _int(s,5); }
    },

    {
      id:26, topic:'Functions',
      label:"Today's Standard Challenge", instruction:'Find the composite:',
      equation:'f(x) = 3x + 1,  g(x) = x − 2\nFind (f ∘ g)(x)', color:'#27ae60',
      solution:[
        '(f ∘ g)(x) means f(g(x)) — first apply g, then f',
        'Compute g(x) = x − 2',
        'Substitute into f: f(x − 2) = 3(x − 2) + 1',
        'Expand: 3x − 6 + 1',
        'Simplify: (f ∘ g)(x) = 3x − 5'
      ],
      hint1:'(f ∘ g)(x) = f(g(x)); first compute g(x), then plug it into f.',
      hint2:'f(x − 2) = 3(x − 2) + 1 = 3x − 5.',
      check(s) { return s.includes('3x-5') || s.includes('3x−5'); }
    },

    {
      id:27, topic:'Functions',
      label:"Today's Standard Challenge", instruction:'Find the inverse:',
      equation:'f(x) = 2x − 4', color:'#27ae60',
      solution:[
        'Write y = 2x − 4',
        'Swap x and y to begin finding the inverse: x = 2y − 4',
        'Solve for y: add 4 to both sides → x + 4 = 2y',
        'Divide by 2: y = (x + 4)/2',
        'Answer: f⁻¹(x) = (x + 4)/2'
      ],
      hint1:'Replace f(x) with y, then swap x and y and solve for y.',
      hint2:'After swapping: x = 2y − 4. Add 4 then divide by 2.',
      check(s) {
        return s.includes('(x+4)/2') || s.includes('x/2+2') || s.includes('x/2+2.0') ||
               _approx(s, 0.5) && s.includes('+2');
      }
    },

    {
      id:28, topic:'Functions',
      label:"Today's Standard Challenge", instruction:'Find the vertex of:',
      equation:'f(x) = x² − 6x + 5', color:'#27ae60',
      solution:[
        'Complete the square: take half the coefficient of x → (−6/2)² = 9',
        'Rewrite: f(x) = (x² − 6x + 9) − 9 + 5',
        'Factorise the perfect square: f(x) = (x − 3)² − 4',
        'The vertex form is (x − h)² + k, so vertex is (h, k)',
        'Answer: vertex = (3, −4)'
      ],
      hint1:'Complete the square to write f(x) in the form (x − h)² + k.',
      hint2:'Half of −6 is −3; adding and subtracting 9 gives (x − 3)² − 4.',
      check(s) { return _int(s,3) && _int(s,-4); }
    },

    {
      id:29, topic:'Functions',
      label:"Today's Standard Challenge", instruction:'Find x where f(x) = g(x):',
      equation:'f(x) = x²\ng(x) = x + 2', color:'#27ae60',
      solution:[
        'Set f(x) = g(x): x² = x + 2',
        'Rearrange: x² − x − 2 = 0',
        'Factor: (x − 2)(x + 1) = 0',
        'Apply zero product property: x = 2 or x = −1',
        'Solutions: x = 2 and x = −1'
      ],
      hint1:'Set the two functions equal and solve the resulting equation.',
      hint2:'x² − x − 2 = 0 factors as (x − 2)(x + 1) = 0.',
      check(s) { return _int(s,2) && _int(s,-1); }
    },

    {
      id:30, topic:'Functions',
      label:"Today's Standard Challenge", instruction:'Calculate:',
      equation:'f(x) = |x − 3|\nFind f(−1)', color:'#27ae60',
      solution:[
        'Substitute x = −1 into f(x) = |x − 3|',
        'Compute the expression inside: −1 − 3 = −4',
        'Apply the absolute value: |−4| = 4',
        'Answer: f(−1) = 4',
        'Note: absolute value always gives a non-negative result'
      ],
      hint1:'Substitute x = −1, then evaluate the absolute value.',
      hint2:'|−1 − 3| = |−4| = 4.',
      check(s) { return _int(s,4); }
    },

  ],

  /* ══════════════════════════════════════════════════════
     ADVANCED  (ids 31–60)
  ══════════════════════════════════════════════════════ */
  advanced: [

    /* — Integration 31–36 — */
    {
      id:31, topic:'Integration',
      label:"Today's Advanced Challenge", instruction:'Evaluate:',
      equation:'∫ x·eˣ dx', color:'#f39c12',
      solution:[
        'Use integration by parts: ∫u dv = uv − ∫v du',
        'Choose u = x (so du = dx) and dv = eˣ dx (so v = eˣ)',
        'Apply the formula: x·eˣ − ∫eˣ dx',
        'Integrate the remaining term: x·eˣ − eˣ',
        'Add constant: answer = eˣ(x − 1) + C'
      ],
      hint1:'Use integration by parts with u = x and dv = eˣ dx.',
      hint2:'The formula gives xe^x − ∫e^x dx = xe^x − e^x + C.',
      check(s) {
        return (s.includes('xe^x') || s.includes('xex')) &&
               (s.includes('-e^x') || s.includes('(x-1)') || s.includes('(x−1)'));
      }
    },

    {
      id:32, topic:'Integration',
      label:"Today's Advanced Challenge", instruction:'Evaluate:',
      equation:'∫₀¹  x/(x² + 1) dx', color:'#f39c12',
      solution:[
        'Use substitution: let u = x² + 1, so du = 2x dx, meaning x dx = du/2',
        'Change limits: x = 0 → u = 1; x = 1 → u = 2',
        'Integral becomes: (1/2)∫₁² 1/u du',
        'Integrate: (1/2)[ln|u|]₁² = (1/2)(ln 2 − ln 1)',
        'Answer: (1/2) ln 2'
      ],
      hint1:'Try the substitution u = x² + 1.',
      hint2:'After substitution the integral becomes (1/2)∫₁² (1/u) du = (1/2)ln 2.',
      check(s) {
        return (s.includes('ln2/2') || s.includes('(1/2)ln2') || s.includes('ln(2)/2') ||
                s.includes('½ln2') || _approx(s, Math.log(2)/2, 0.05));
      }
    },

    {
      id:33, topic:'Integration',
      label:"Today's Advanced Challenge", instruction:'Evaluate:',
      equation:'∫₀^π  sin(x) dx', color:'#f39c12',
      solution:[
        'Find the antiderivative of sin(x): −cos(x)',
        'Apply the fundamental theorem of calculus: [−cos(x)]₀^π',
        'Evaluate at upper limit: −cos(π) = −(−1) = 1',
        'Evaluate at lower limit: −cos(0) = −1',
        'Subtract: 1 − (−1) = 2'
      ],
      hint1:'The antiderivative of sin(x) is −cos(x).',
      hint2:'[−cos(x)]₀^π = −cos(π) − (−cos(0)) = 1 + 1 = 2.',
      check(s) { return _int(s,2); }
    },

    {
      id:34, topic:'Integration',
      label:"Today's Advanced Challenge", instruction:'Evaluate:',
      equation:'∫₀¹  x·eˣ dx', color:'#f39c12',
      solution:[
        'Use integration by parts: u = x, dv = eˣ dx, so du = dx, v = eˣ',
        'Apply: [x·eˣ]₀¹ − ∫₀¹ eˣ dx',
        'Evaluate first term: 1·e¹ − 0·e⁰ = e',
        'Integrate and evaluate: [eˣ]₀¹ = e − 1',
        'Answer: e − (e − 1) = 1'
      ],
      hint1:'Use integration by parts with u = x and dv = eˣ dx.',
      hint2:'[xeˣ − eˣ]₀¹ = (e − e) − (0 − 1) = 1.',
      check(s) { return _int(s,1); }
    },

    {
      id:35, topic:'Integration',
      label:"Today's Advanced Challenge", instruction:'Evaluate:',
      equation:'∫ x²·cos(x) dx', color:'#f39c12',
      solution:[
        'Apply integration by parts twice (tabular method)',
        'First: u = x², dv = cos(x)dx → x²sin(x) − ∫2x·sin(x)dx',
        'Second: u = 2x, dv = sin(x)dx → −2x·cos(x) + ∫2cos(x)dx',
        'Integrate remaining term: +2sin(x)',
        'Answer: x²sin(x) + 2x·cos(x) − 2sin(x) + C'
      ],
      hint1:'Use integration by parts twice; consider tabular integration.',
      hint2:'First round: x²sin(x) − ∫2x sin(x) dx; apply by parts again.',
      check(s) {
        return s.includes('x2sin') || s.includes('x²sin') ||
               (s.includes('sin') && s.includes('cos') && s.includes('x2'));
      }
    },

    {
      id:36, topic:'Integration',
      label:"Today's Advanced Challenge", instruction:'Evaluate:',
      equation:'∫₀^(π/2)  cos²(x) dx', color:'#f39c12',
      solution:[
        'Use the half-angle identity: cos²(x) = (1 + cos(2x))/2',
        'Rewrite the integral: (1/2)∫₀^(π/2) (1 + cos(2x)) dx',
        'Integrate term by term: (1/2)[x + sin(2x)/2]₀^(π/2)',
        'Evaluate at upper limit: (1/2)(π/2 + 0) = π/4',
        'Answer: π/4'
      ],
      hint1:'Use the identity cos²(x) = (1 + cos(2x))/2 to remove the square.',
      hint2:'After substitution the integral simplifies to (1/2)[x + sin(2x)/2].',
      check(s) {
        return s.includes('π/4') || s.includes('pi/4') || _approx(s, Math.PI/4, 0.05);
      }
    },

    /* — Differential Equations 37–42 — */
    {
      id:37, topic:'Differential Equations',
      label:"Today's Advanced Challenge", instruction:'Solve the IVP:',
      equation:'dy/dx = 2xy,  y(0) = 1', color:'#f39c12',
      solution:[
        'Separate variables: dy/y = 2x dx',
        'Integrate both sides: ln|y| = x² + C',
        'Exponentiate: y = Ae^(x²) where A = eᶜ',
        'Apply initial condition y(0) = 1: 1 = Ae⁰ = A, so A = 1',
        'Solution: y = e^(x²)'
      ],
      hint1:'Separate the variables: move y to one side and x to the other.',
      hint2:'Integrating gives ln|y| = x², so y = e^(x²).',
      check(s) {
        return s.includes('e^(x^2)') || s.includes('e^x2') || s.includes('e^(x²)') ||
               s.includes('exp(x2)') || s.includes('e^{x^2}');
      }
    },

    {
      id:38, topic:'Differential Equations',
      label:"Today's Advanced Challenge", instruction:'Solve the IVP:',
      equation:'y″ + 4y = 0,  y(0) = 1,  y′(0) = 0', color:'#f39c12',
      solution:[
        'Write the characteristic equation: r² + 4 = 0',
        'Solve: r² = −4, so r = ±2i',
        'General solution (complex roots): y = A·cos(2x) + B·sin(2x)',
        'Apply y(0) = 1: A·cos(0) + B·sin(0) = A = 1',
        'Apply y′(0) = 0: y′ = −2A·sin(2x) + 2B·cos(2x), y′(0) = 2B = 0 → B = 0; y = cos(2x)'
      ],
      hint1:'Write the characteristic equation r² + 4 = 0 and find roots.',
      hint2:'Complex roots r = ±2i give y = A cos(2x) + B sin(2x). Use initial conditions.',
      check(s) { return s.includes('cos(2x)') || s.includes('cos2x'); }
    },

    {
      id:39, topic:'Differential Equations',
      label:"Today's Advanced Challenge", instruction:'Solve the IVP:',
      equation:'dy/dx + y = 0,  y(0) = 2', color:'#f39c12',
      solution:[
        'Separate variables: dy/y = −dx',
        'Integrate both sides: ln|y| = −x + C',
        'Exponentiate: y = Ae^(−x)',
        'Apply initial condition y(0) = 2: 2 = Ae⁰ = A',
        'Solution: y = 2e^(−x)'
      ],
      hint1:'Rearrange to separate variables: dy/y = −dx.',
      hint2:'After integrating, apply y(0) = 2 to find A = 2.',
      check(s) { return s.includes('2e^(-x)') || s.includes('2e^{-x}') || s.includes('2e^-x'); }
    },

    {
      id:40, topic:'Differential Equations',
      label:"Today's Advanced Challenge", instruction:'Solve the IVP:',
      equation:'dy/dx = y − 1,  y(0) = 3', color:'#f39c12',
      solution:[
        'Separate variables: dy/(y − 1) = dx',
        'Integrate both sides: ln|y − 1| = x + C',
        'Exponentiate: y − 1 = Ae^x',
        'Apply initial condition y(0) = 3: 3 − 1 = A·1, so A = 2',
        'Solution: y = 2eˣ + 1'
      ],
      hint1:'The expression (y − 1) can be treated as a single unit; separate variables.',
      hint2:'After integration: y − 1 = Ae^x. Use y(0) = 3 to find A = 2.',
      check(s) { return s.includes('2e^x+1') || s.includes('2ex+1') || s.includes('2e^x+1'); }
    },

    {
      id:41, topic:'Differential Equations',
      label:"Today's Advanced Challenge", instruction:'Solve the IVP:',
      equation:'y′ + 2y = 4,  y(0) = 0', color:'#f39c12',
      solution:[
        'Integrating factor: μ(x) = e^(∫2 dx) = e^(2x)',
        'Multiply through: (e^(2x) y)′ = 4e^(2x)',
        'Integrate: e^(2x) y = 2e^(2x) + C',
        'Divide by e^(2x): y = 2 + Ce^(−2x)',
        'Apply y(0) = 0: 0 = 2 + C, so C = −2; y = 2(1 − e^(−2x))'
      ],
      hint1:'Use an integrating factor μ = e^(2x).',
      hint2:'After multiplying through, integrate to get e^(2x)y = 2e^(2x) + C.',
      check(s) {
        return s.includes('2(1-e^(-2x))') || s.includes('2-2e^(-2x)') ||
               (s.includes('1-e') && s.includes('2x'));
      }
    },

    {
      id:42, topic:'Differential Equations',
      label:"Today's Advanced Challenge", instruction:'Solve the IVP:',
      equation:'y″ − y = 0,  y(0) = 1,  y′(0) = −1', color:'#f39c12',
      solution:[
        'Write the characteristic equation: r² − 1 = 0',
        'Factor: (r − 1)(r + 1) = 0, so r = 1 or r = −1',
        'General solution: y = Ae^x + Be^(−x)',
        'Apply y(0) = 1: A + B = 1',
        'Apply y′(0) = −1: A − B = −1; solving gives A = 0, B = 1; y = e^(−x)'
      ],
      hint1:'Characteristic equation r² − 1 = 0 gives r = ±1.',
      hint2:'General solution: y = Ae^x + Be^(−x). Use initial conditions to find A=0, B=1.',
      check(s) { return s.includes('e^(-x)') || s.includes('e^{-x}') || s.includes('e^-x'); }
    },

    /* — Matrices 43–48 — */
    {
      id:43, topic:'Matrices',
      label:"Today's Advanced Challenge", instruction:'Find the determinant:',
      equation:'A = [[3, 2], [1, 4]]', color:'#f39c12',
      solution:[
        'For a 2×2 matrix [[a,b],[c,d]], det = ad − bc',
        'Identify: a=3, b=2, c=1, d=4',
        'Compute: ad = 3×4 = 12',
        'Compute: bc = 2×1 = 2',
        'det(A) = 12 − 2 = 10'
      ],
      hint1:'Use the formula det([[a,b],[c,d]]) = ad − bc.',
      hint2:'(3)(4) − (2)(1) = 12 − 2 = 10.',
      check(s) { return _int(s,10); }
    },

    {
      id:44, topic:'Matrices',
      label:"Today's Advanced Challenge", instruction:'Find the inverse:',
      equation:'A = [[2, 1], [5, 3]]', color:'#f39c12',
      solution:[
        'Compute det(A) = (2)(3) − (1)(5) = 6 − 5 = 1',
        'For a 2×2 matrix, A⁻¹ = (1/det)·[[d,−b],[−c,a]]',
        'Substitute: A⁻¹ = (1/1)·[[3,−1],[−5,2]]',
        'Verify: A·A⁻¹ = [[2,1],[5,3]]·[[3,−1],[−5,2]] = [[1,0],[0,1]] ✓',
        'Answer: A⁻¹ = [[3,−1],[−5,2]]'
      ],
      hint1:'det(A) = 2·3 − 1·5 = 1, which makes the inverse easy to compute.',
      hint2:'Swap the diagonal, negate the off-diagonal, divide by det = 1.',
      check(s) {
        return _int(s,3) && _int(s,-1) && _int(s,-5) && _int(s,2);
      }
    },

    {
      id:45, topic:'Matrices',
      label:"Today's Advanced Challenge", instruction:'Solve for X:',
      equation:'[[2, 3], [1, 2]] X = [[8], [5]]', color:'#f39c12',
      solution:[
        'Compute det([[2,3],[1,2]]) = 4 − 3 = 1',
        'Find the inverse: A⁻¹ = [[2,−3],[−1,2]]',
        'Multiply: X = A⁻¹·b = [[2,−3],[−1,2]]·[[8],[5]]',
        'Row 1: 2(8) + (−3)(5) = 16 − 15 = 1',
        'Row 2: (−1)(8) + 2(5) = −8 + 10 = 2; X = [[1],[2]]'
      ],
      hint1:'Find A⁻¹ (det = 1), then multiply X = A⁻¹b.',
      hint2:'A⁻¹ = [[2,−3],[−1,2]], and the solution is X = (1, 2).',
      check(s) { return _int(s,1) && _int(s,2); }
    },

    {
      id:46, topic:'Matrices',
      label:"Today's Advanced Challenge", instruction:'Find the eigenvalues of:',
      equation:'A = [[4, 1], [2, 3]]', color:'#f39c12',
      solution:[
        'Set up the characteristic equation: det(A − λI) = 0',
        'det([[4−λ,1],[2,3−λ]]) = (4−λ)(3−λ) − 2 = 0',
        'Expand: λ² − 7λ + 12 − 2 = λ² − 7λ + 10 = 0',
        'Factor: (λ − 2)(λ − 5) = 0',
        'Eigenvalues: λ = 2 and λ = 5'
      ],
      hint1:'Solve det(A − λI) = 0.',
      hint2:'The characteristic polynomial is λ² − 7λ + 10 = (λ−2)(λ−5) = 0.',
      check(s) { return _int(s,2) && _int(s,5); }
    },

    {
      id:47, topic:'Matrices',
      label:"Today's Advanced Challenge", instruction:'Compute AB:',
      equation:'A = [[1, 0], [2, 1]],  B = [[2, 1], [0, 3]]', color:'#f39c12',
      solution:[
        'Multiply row 1 of A by columns of B:',
        'Entry (1,1): 1·2 + 0·0 = 2; Entry (1,2): 1·1 + 0·3 = 1',
        'Multiply row 2 of A by columns of B:',
        'Entry (2,1): 2·2 + 1·0 = 4; Entry (2,2): 2·1 + 1·3 = 5',
        'Answer: AB = [[2,1],[4,5]]'
      ],
      hint1:'Each entry (i,j) of AB is the dot product of row i of A with column j of B.',
      hint2:'Row 2, col 2: 2·1 + 1·3 = 5.',
      check(s) {
        return _int(s,2) && _int(s,1) && _int(s,4) && _int(s,5);
      }
    },

    {
      id:48, topic:'Matrices',
      label:"Today's Advanced Challenge", instruction:'Find the determinant:',
      equation:'A = [[1, 2, 0], [3, 0, 1], [2, 1, 4]]', color:'#f39c12',
      solution:[
        'Expand along row 1: det = 1·M₁₁ − 2·M₁₂ + 0·M₁₃',
        'M₁₁ = det([[0,1],[1,4]]) = 0·4 − 1·1 = −1',
        'M₁₂ = det([[3,1],[2,4]]) = 3·4 − 1·2 = 10',
        'det = 1·(−1) − 2·(10) + 0 = −1 − 20',
        'Answer: det(A) = −21'
      ],
      hint1:'Expand along the first row; the zero in position (1,3) simplifies things.',
      hint2:'1×(−1) − 2×10 + 0 = −21.',
      check(s) { return _int(s,-21); }
    },

    /* — Vectors 49–54 — */
    {
      id:49, topic:'Vectors',
      label:"Today's Advanced Challenge", instruction:'Find the dot product:',
      equation:'u = (3, 4, 0),  v = (1, 2, 3)', color:'#f39c12',
      solution:[
        'The dot product is u · v = u₁v₁ + u₂v₂ + u₃v₃',
        'Multiply component-wise: 3×1, 4×2, 0×3',
        'First components: 3×1 = 3',
        'Second components: 4×2 = 8',
        'Sum: 3 + 8 + 0 = 11'
      ],
      hint1:'Use u·v = u₁v₁ + u₂v₂ + u₃v₃.',
      hint2:'3(1) + 4(2) + 0(3) = 3 + 8 + 0 = 11.',
      check(s) { return _int(s,11); }
    },

    {
      id:50, topic:'Vectors',
      label:"Today's Advanced Challenge", instruction:'Find the magnitude of the cross product:',
      equation:'u = (1, 0, 0),  v = (0, 1, 0)', color:'#f39c12',
      solution:[
        'Compute u × v using the determinant formula',
        'i component: (0)(0) − (0)(1) = 0',
        'j component: −[(1)(0) − (0)(0)] = 0',
        'k component: (1)(1) − (0)(0) = 1',
        'u × v = (0, 0, 1); magnitude = 1'
      ],
      hint1:'u × v is perpendicular to both u and v; for unit vectors, |u × v| = sin(θ).',
      hint2:'The standard basis vectors i and j are perpendicular, so |i × j| = 1.',
      check(s) { return _int(s,1); }
    },

    {
      id:51, topic:'Vectors',
      label:"Today's Advanced Challenge", instruction:'Find the scalar projection of v onto u:',
      equation:'v = (3, 4),  u = (1, 0)', color:'#f39c12',
      solution:[
        'The scalar projection of v onto u is comp_u(v) = v · û',
        'û = u/|u| = (1,0)/1 = (1,0)',
        'Compute v · û = (3)(1) + (4)(0)',
        '= 3 + 0 = 3',
        'Scalar projection = 3'
      ],
      hint1:'The scalar projection is v · (u/|u|).',
      hint2:'Since u = (1,0) is already a unit vector, the projection is just v·u = 3.',
      check(s) { return _int(s,3); }
    },

    {
      id:52, topic:'Vectors',
      label:"Today's Advanced Challenge", instruction:'Find the angle between:',
      equation:'u = (1, 1, 0),  v = (1, 0, 0)', color:'#f39c12',
      solution:[
        'Use cos(θ) = (u · v)/(|u||v|)',
        'Compute u · v = (1)(1) + (1)(0) + (0)(0) = 1',
        'Compute |u| = √(1+1+0) = √2 and |v| = 1',
        'cos(θ) = 1/(√2 · 1) = 1/√2',
        'θ = cos⁻¹(1/√2) = π/4 = 45°'
      ],
      hint1:'Use the dot product formula: cos θ = (u·v)/(|u||v|).',
      hint2:'cos θ = 1/√2, so θ = 45° = π/4.',
      check(s) {
        return _int(s,45) || s.includes('π/4') || s.includes('pi/4') || _approx(s,Math.PI/4,0.05);
      }
    },

    {
      id:53, topic:'Vectors',
      label:"Today's Advanced Challenge", instruction:'Find the angle between v and w given:',
      equation:'|v| = 5,  |w| = 4,  v · w = 10', color:'#f39c12',
      solution:[
        'Use the dot product formula: v · w = |v||w|cos(θ)',
        'Substitute: 10 = (5)(4)cos(θ) = 20 cos(θ)',
        'Solve: cos(θ) = 10/20 = 1/2',
        'Take inverse cosine: θ = cos⁻¹(1/2)',
        'Answer: θ = π/3 = 60°'
      ],
      hint1:'Rearrange the dot product formula: cos θ = (v·w)/(|v||w|).',
      hint2:'cos θ = 10/20 = 1/2, so θ = 60°.',
      check(s) {
        return _int(s,60) || s.includes('π/3') || s.includes('pi/3') || _approx(s,Math.PI/3,0.05);
      }
    },

    {
      id:54, topic:'Vectors',
      label:"Today's Advanced Challenge", instruction:'Find the cross product:',
      equation:'a = (1, 2, 3),  b = (4, 5, 6)', color:'#f39c12',
      solution:[
        'Use the determinant formula: a × b = |i  j  k / 1  2  3 / 4  5  6|',
        'i component: (2)(6) − (3)(5) = 12 − 15 = −3',
        'j component: −[(1)(6) − (3)(4)] = −[6 − 12] = 6',
        'k component: (1)(5) − (2)(4) = 5 − 8 = −3',
        'Answer: a × b = (−3, 6, −3)'
      ],
      hint1:'Use the 3×3 determinant formula expanding along the first row.',
      hint2:'i: (2·6−3·5)=−3; j: −(1·6−3·4)=6; k: (1·5−2·4)=−3.',
      check(s) { return _int(s,-3) && _int(s,6); }
    },

    /* — Complex Numbers 55–60 — */
    {
      id:55, topic:'Complex Numbers',
      label:"Today's Advanced Challenge", instruction:'Expand and simplify:',
      equation:'(2 + 3i)(1 − i)', color:'#f39c12',
      solution:[
        'Expand using FOIL: 2·1 + 2·(−i) + 3i·1 + 3i·(−i)',
        'Compute each term: 2 − 2i + 3i − 3i²',
        'Recall i² = −1, so −3i² = +3',
        'Combine real parts: 2 + 3 = 5',
        'Combine imaginary parts: −2i + 3i = i; answer = 5 + i'
      ],
      hint1:'Expand using FOIL, then replace i² with −1.',
      hint2:'−3i² = 3; real part = 5, imaginary part = 1.',
      check(s) { return s.includes('5+i') || s.includes('5+1i'); }
    },

    {
      id:56, topic:'Complex Numbers',
      label:"Today's Advanced Challenge", instruction:'Find the modulus:',
      equation:'z = 3 + 4i', color:'#f39c12',
      solution:[
        'The modulus of z = a + bi is |z| = √(a² + b²)',
        'Identify a = 3, b = 4',
        'Compute: a² = 9, b² = 16',
        'Sum: a² + b² = 25',
        'Answer: |z| = √25 = 5'
      ],
      hint1:'Use |z| = √(a² + b²) for z = a + bi.',
      hint2:'√(3² + 4²) = √(9 + 16) = √25 = 5.',
      check(s) { return _int(s,5); }
    },

    {
      id:57, topic:'Complex Numbers',
      label:"Today's Advanced Challenge", instruction:'Simplify:',
      equation:'(1 + i)²', color:'#f39c12',
      solution:[
        'Expand: (1 + i)² = 1² + 2(1)(i) + i²',
        '= 1 + 2i + i²',
        'Recall i² = −1',
        '= 1 + 2i − 1',
        'Answer: 2i'
      ],
      hint1:'Use (a + b)² = a² + 2ab + b² and remember i² = −1.',
      hint2:'1 + 2i + i² = 1 + 2i − 1 = 2i.',
      check(s) { return s.includes('2i') && !s.includes('2i+') && !s.includes('+2i'); }
    },

    {
      id:58, topic:'Complex Numbers',
      label:"Today's Advanced Challenge", instruction:'Find the argument (in radians):',
      equation:'z = −1 + i', color:'#f39c12',
      solution:[
        'The argument is arg(z) = arctan(Im/Re) adjusted for the quadrant',
        'Re(z) = −1, Im(z) = 1; z lies in the second quadrant (Re < 0, Im > 0)',
        'Reference angle: arctan(|1|/|−1|) = arctan(1) = π/4',
        'In QII: arg(z) = π − π/4 = 3π/4',
        'Answer: arg(z) = 3π/4 (= 135°)'
      ],
      hint1:'Identify the quadrant; z = −1+i is in QII.',
      hint2:'Reference angle = π/4; in QII the argument is π − π/4 = 3π/4.',
      check(s) {
        return s.includes('3π/4') || s.includes('3pi/4') || _int(s,135) || _approx(s,3*Math.PI/4,0.05);
      }
    },

    {
      id:59, topic:'Complex Numbers',
      label:"Today's Advanced Challenge", instruction:'Solve for z:',
      equation:'z² = i', color:'#f39c12',
      solution:[
        'Write z = re^(iθ); then z² = r²e^(2iθ) = i = e^(iπ/2)',
        'So r² = 1 (r = 1) and 2θ = π/2 + 2kπ',
        'Solutions: θ = π/4 and θ = π/4 + π = 5π/4',
        'z₁ = e^(iπ/4) = (1 + i)/√2',
        'z₂ = e^(i5π/4) = −(1 + i)/√2'
      ],
      hint1:'Write i in polar form: i = e^(iπ/2), then take the square root.',
      hint2:'The two square roots are ±e^(iπ/4) = ±(1+i)/√2.',
      check(s) {
        return (s.includes('(1+i)') || s.includes('1+i')) && (s.includes('√2') || s.includes('sqrt(2)') || s.includes('sqrt2'));
      }
    },

    {
      id:60, topic:'Complex Numbers',
      label:"Today's Advanced Challenge", instruction:'Find the real part of:',
      equation:'(3 + 4i) / (1 − 2i)', color:'#f39c12',
      solution:[
        'Multiply numerator and denominator by the conjugate of the denominator: (1 + 2i)',
        'Numerator: (3+4i)(1+2i) = 3+6i+4i+8i² = 3+10i−8 = −5+10i',
        'Denominator: (1−2i)(1+2i) = 1 − 4i² = 1 + 4 = 5',
        'Result: (−5 + 10i)/5 = −1 + 2i',
        'Re((3+4i)/(1−2i)) = −1'
      ],
      hint1:'Multiply by the conjugate (1+2i)/(1+2i) to clear the denominator.',
      hint2:'After multiplying: (−5+10i)/5 = −1+2i, so the real part is −1.',
      check(s) { return _int(s,-1); }
    },

  ],

  /* ══════════════════════════════════════════════════════
     HARD  (ids 61–90)
  ══════════════════════════════════════════════════════ */
  hard: [

    /* — Abstract Algebra 61–66 — */
    {
      id:61, topic:'Abstract Algebra',
      label:"Today's Hard Challenge", instruction:'Find the order of the element:',
      equation:'Order of 4 in (ℤ₇*, ×)', color:'#e74c3c',
      solution:[
        'Compute successive powers of 4 modulo 7',
        '4¹ ≡ 4 (mod 7)',
        '4² ≡ 16 ≡ 2 (mod 7)',
        '4³ ≡ 4·2 = 8 ≡ 1 (mod 7)',
        'Since 4³ ≡ 1, the order of 4 is 3'
      ],
      hint1:'Compute 4¹, 4², 4³, … modulo 7 until you reach 1.',
      hint2:'4² ≡ 2 and 4³ ≡ 8 ≡ 1, so the order is 3.',
      check(s) { return _int(s,3); }
    },

    {
      id:62, topic:'Abstract Algebra',
      label:"Today's Hard Challenge", instruction:'Calculate:',
      equation:'|S₃|  (order of the symmetric group)', color:'#e74c3c',
      solution:[
        'S₃ is the group of all permutations of the set {1, 2, 3}',
        'A permutation is a bijection from the set to itself',
        'Number of ways to arrange 3 elements: 3! = 3 × 2 × 1',
        'So |S₃| = 6',
        'The elements are: e, (12), (13), (23), (123), (132)'
      ],
      hint1:'|Sₙ| counts all permutations of n elements.',
      hint2:'|S₃| = 3! = 6.',
      check(s) { return _int(s,6); }
    },

    {
      id:63, topic:'Abstract Algebra',
      label:"Today's Hard Challenge", instruction:'Count:',
      equation:'Number of group homomorphisms φ : ℤ₄ → ℤ₄', color:'#e74c3c',
      solution:[
        'ℤ₄ = ⟨1⟩ is cyclic, so φ is determined by φ(1)',
        'φ(1) can be any element of ℤ₄ since ℤ₄ is cyclic',
        'Each choice φ(1) = k defines a valid homomorphism: φ(n) = kn (mod 4)',
        'There are 4 choices: φ(1) ∈ {0, 1, 2, 3}',
        'Answer: 4 homomorphisms'
      ],
      hint1:'ℤ₄ is cyclic, so a homomorphism is determined by the image of the generator 1.',
      hint2:'Any element of ℤ₄ can be the image of 1, giving 4 choices.',
      check(s) { return _int(s,4); }
    },

    {
      id:64, topic:'Abstract Algebra',
      label:"Today's Hard Challenge", instruction:'Find the order of the group:',
      equation:'|ℤ₂ ⊕ ℤ₈|', color:'#e74c3c',
      solution:[
        'The direct product G ⊕ H has order |G| · |H|',
        'Here G = ℤ₂ with |ℤ₂| = 2',
        'And H = ℤ₈ with |ℤ₈| = 8',
        '|ℤ₂ ⊕ ℤ₈| = 2 · 8 = 16',
        'Answer: 16'
      ],
      hint1:'|G ⊕ H| = |G| · |H|.',
      hint2:'|ℤ₂| = 2 and |ℤ₈| = 8, so the product has 16 elements.',
      check(s) { return _int(s,16); }
    },

    {
      id:65, topic:'Abstract Algebra',
      label:"Today's Hard Challenge", instruction:'Use the Chinese Remainder Theorem to find:',
      equation:'Smallest positive x such that\nx ≡ 3 (mod 5)  and  x ≡ 2 (mod 7)', color:'#e74c3c',
      solution:[
        'By CRT, since gcd(5,7) = 1, a unique solution exists modulo 35',
        'From x ≡ 3 (mod 5): x = 3, 8, 13, 18, 23, 28, …',
        'Check each against x ≡ 2 (mod 7):',
        '23 mod 7 = 2 ✓  (since 7×3 = 21 and 23 − 21 = 2)',
        'Smallest positive solution: x = 23'
      ],
      hint1:'List multiples satisfying each congruence and find the first match.',
      hint2:'x = 3 (mod 5) gives 3, 8, 13, 18, 23, … Check which equals 2 (mod 7).',
      check(s) { return _int(s,23); }
    },

    {
      id:66, topic:'Abstract Algebra',
      label:"Today's Hard Challenge", instruction:'Count:',
      equation:'Number of group homomorphisms φ : ℤ₄ → ℤ₂', color:'#e74c3c',
      solution:[
        'A homomorphism is determined by φ(1), the image of the generator',
        'φ(1) must satisfy: order of φ(1) divides order of 1 in ℤ₄ (which is 4)',
        'Also φ(1) ∈ ℤ₂, so φ(1) ∈ {0, 1}; order of 0 is 1, order of 1 is 2',
        'Both 1 and 2 divide 4, so both choices are valid',
        'Answer: 2 homomorphisms (trivial φ≡0, and the surjective φ(n)=n mod 2)'
      ],
      hint1:'φ(1) must have order dividing gcd(4, 2) = 2 in ℤ₂.',
      hint2:'Both 0 and 1 in ℤ₂ satisfy this; there are exactly 2 homomorphisms.',
      check(s) { return _int(s,2); }
    },

    /* — Real Analysis 67–72 — */
    {
      id:67, topic:'Real Analysis',
      label:"Today's Hard Challenge", instruction:'Evaluate:',
      equation:'lim_{x→0}  (1 − cos x) / x²', color:'#e74c3c',
      solution:[
        'Direct substitution gives 0/0, an indeterminate form',
        'Apply L\'Hôpital\'s rule: differentiate top and bottom',
        'Numerator derivative: sin x; denominator derivative: 2x',
        'Still 0/0: apply L\'Hôpital again: cos x / 2',
        'Limit: cos(0)/2 = 1/2'
      ],
      hint1:'0/0 form — apply L\'Hôpital\'s rule twice, or use the Taylor expansion cos x ≈ 1 − x²/2.',
      hint2:'After two applications: lim cos(x)/2 = 1/2.',
      check(s) { return _frac(s,1,2) || _approx(s,0.5); }
    },

    {
      id:68, topic:'Real Analysis',
      label:"Today's Hard Challenge", instruction:'Evaluate the series:',
      equation:'∑_{n=1}^∞  3 / (2n(n+1))', color:'#e74c3c',
      solution:[
        'Factor: (3/2) ∑_{n=1}^∞ 1/(n(n+1))',
        'Partial fractions: 1/(n(n+1)) = 1/n − 1/(n+1)',
        'Telescope: ∑_{n=1}^∞ (1/n − 1/(n+1)) = 1 (partial sums → 1)',
        'Multiply by prefactor: (3/2) · 1 = 3/2',
        'Answer: 3/2'
      ],
      hint1:'Factor out 3/2 and use partial fractions on 1/(n(n+1)).',
      hint2:'Partial fractions give a telescoping series with sum 1; then multiply by 3/2.',
      check(s) { return _frac(s,3,2) || _approx(s,1.5); }
    },

    {
      id:69, topic:'Real Analysis',
      label:"Today's Hard Challenge", instruction:'Evaluate the series:',
      equation:'∑_{n=1}^∞  1 / (n(n+1))', color:'#e74c3c',
      solution:[
        'Use partial fractions: 1/(n(n+1)) = 1/n − 1/(n+1)',
        'Write out partial sums: (1 − 1/2) + (1/2 − 1/3) + (1/3 − 1/4) + …',
        'This is a telescoping series',
        'The Nᵗʰ partial sum is 1 − 1/(N+1)',
        'As N → ∞: sum = 1'
      ],
      hint1:'Use partial fractions: 1/(n(n+1)) = 1/n − 1/(n+1).',
      hint2:'The partial sums telescope, leaving 1 − 1/(N+1) → 1.',
      check(s) { return _int(s,1); }
    },

    {
      id:70, topic:'Real Analysis',
      label:"Today's Hard Challenge", instruction:'Evaluate the series:',
      equation:'∑_{n=1}^∞  1 / (n(n+2))', color:'#e74c3c',
      solution:[
        'Use partial fractions: 1/(n(n+2)) = (1/2)(1/n − 1/(n+2))',
        'The series telescopes with a lag of 2',
        'Partial sum = (1/2)[(1 − 1/3) + (1/2 − 1/4) + (1/3 − 1/5) + …]',
        'Non-cancelled terms from the start: 1/2·(1 + 1/2) = 3/4',
        'Answer: 3/4'
      ],
      hint1:'Apply partial fractions: 1/(n(n+2)) = (1/2)(1/n − 1/(n+2)).',
      hint2:'The telescoping leaves (1/2)(1 + 1/2) = 3/4.',
      check(s) { return _frac(s,3,4) || _approx(s,0.75); }
    },

    {
      id:71, topic:'Real Analysis',
      label:"Today's Hard Challenge", instruction:'Evaluate:',
      equation:'lim_{x→2}  (x² − 4) / (x − 2)', color:'#e74c3c',
      solution:[
        'Direct substitution gives 0/0, an indeterminate form',
        'Factor the numerator: x² − 4 = (x − 2)(x + 2)',
        'Cancel the common factor (x − 2) for x ≠ 2',
        'The expression simplifies to x + 2',
        'Take the limit: lim_{x→2} (x + 2) = 4'
      ],
      hint1:'Factor the numerator using difference of squares.',
      hint2:'x² − 4 = (x−2)(x+2); cancel (x−2) to get x+2, then substitute x=2.',
      check(s) { return _int(s,4); }
    },

    {
      id:72, topic:'Real Analysis',
      label:"Today's Hard Challenge", instruction:'Evaluate:',
      equation:'∫₀¹  x² dx', color:'#e74c3c',
      solution:[
        'Apply the power rule: ∫xⁿ dx = xⁿ⁺¹/(n+1)',
        'Antiderivative of x² is x³/3',
        'Apply fundamental theorem of calculus: [x³/3]₀¹',
        'Evaluate at upper limit: 1³/3 = 1/3',
        'Evaluate at lower limit: 0³/3 = 0; answer = 1/3 − 0 = 1/3'
      ],
      hint1:'Use the power rule ∫x² dx = x³/3.',
      hint2:'[x³/3]₀¹ = 1/3 − 0 = 1/3.',
      check(s) { return _frac(s,1,3) || _approx(s,1/3); }
    },

    /* — Linear Algebra 73–78 — */
    {
      id:73, topic:'Linear Algebra',
      label:"Today's Hard Challenge", instruction:'Find all eigenvalues of:',
      equation:'A = [[1, 0, 2], [0, −1, 0], [0, 0, 3]]', color:'#e74c3c',
      solution:[
        'A is upper triangular, so eigenvalues are the diagonal entries',
        'Read off the diagonal: 1, −1, 3',
        'Verify: det(A − λI) = (1−λ)(−1−λ)(3−λ) = 0',
        'Roots: λ = 1, λ = −1, λ = 3',
        'Eigenvalues: {−1, 1, 3}'
      ],
      hint1:'For a triangular matrix, eigenvalues are the diagonal entries.',
      hint2:'The diagonal is (1, −1, 3), giving eigenvalues −1, 1, 3.',
      check(s) { return _int(s,-1) && _int(s,1) && _int(s,3); }
    },

    {
      id:74, topic:'Linear Algebra',
      label:"Today's Hard Challenge", instruction:'Find the nullity of:',
      equation:'A = [[1, 2, 3, 4], [0, 1, 2, 3], [0, 0, 0, 0]]', color:'#e74c3c',
      solution:[
        'Identify the matrix dimensions: A is 3 × 4',
        'Row reduce: A is already in row echelon form',
        'Count pivot columns: columns 1 and 2 are pivots, so rank(A) = 2',
        'Apply Rank-Nullity Theorem: nullity = n − rank = 4 − 2',
        'Answer: nullity = 2'
      ],
      hint1:'Use the Rank-Nullity Theorem: nullity = n − rank(A).',
      hint2:'The matrix has 2 pivots in a 3×4 matrix, so rank = 2 and nullity = 4 − 2 = 2.',
      check(s) { return _int(s,2); }
    },

    {
      id:75, topic:'Linear Algebra',
      label:"Today's Hard Challenge", instruction:'Find the eigenvalue and its multiplicity for:',
      equation:'A = [[1, 1, 0], [0, 1, 1], [0, 0, 1]]', color:'#e74c3c',
      solution:[
        'Compute the characteristic polynomial: det(A − λI)',
        'A − λI is upper triangular with diagonal entries (1−λ, 1−λ, 1−λ)',
        'det(A − λI) = (1−λ)³',
        'Setting equal to zero: (1−λ)³ = 0 → λ = 1',
        'Eigenvalue λ = 1 with algebraic multiplicity 3'
      ],
      hint1:'A is upper triangular; its characteristic polynomial is the product of (λᵢ − λ) for diagonal entries.',
      hint2:'All diagonal entries equal 1, so char. poly = (1−λ)³ → λ = 1, multiplicity 3.',
      check(s) { return _int(s,1) && (s.includes('mult') || s.includes('3') || _int(s,3)); }
    },

    {
      id:76, topic:'Linear Algebra',
      label:"Today's Hard Challenge", instruction:'Find the dimension of the null space of:',
      equation:'A = [[2, 4], [1, 2], [3, 6]]', color:'#e74c3c',
      solution:[
        'Row reduce A: R2 ← R2 − (1/2)R1, R3 ← R3 − (3/2)R1',
        'After reduction: [[2,4],[0,0],[0,0]] — one pivot',
        'rank(A) = 1 (one pivot column in a 3×2 matrix)',
        'Rank-Nullity: nullity = n − rank = 2 − 1 = 1',
        'Answer: dim(null space) = 1'
      ],
      hint1:'Row reduce to find the rank, then use Rank-Nullity Theorem.',
      hint2:'All rows are multiples of (2,4); rank = 1, so nullity = 2 − 1 = 1.',
      check(s) { return _int(s,1); }
    },

    {
      id:77, topic:'Linear Algebra',
      label:"Today's Hard Challenge", instruction:'Find the determinant:',
      equation:'A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]', color:'#e74c3c',
      solution:[
        'Expand along row 1: det = 1(5·9−6·8) − 2(4·9−6·7) + 3(4·8−5·7)',
        'Compute: 1(45−48) − 2(36−42) + 3(32−35)',
        '= 1(−3) − 2(−6) + 3(−3)',
        '= −3 + 12 − 9',
        'det = 0 (rows are arithmetic progressions — linearly dependent)'
      ],
      hint1:'Notice the rows form arithmetic progressions; they are linearly dependent.',
      hint2:'Row 3 = 2·Row 2 − Row 1, which implies the determinant is 0.',
      check(s) { return _int(s,0); }
    },

    {
      id:78, topic:'Linear Algebra',
      label:"Today's Hard Challenge", instruction:'Find all eigenvalues of:',
      equation:'A = [[5, −2], [3, 0]]', color:'#e74c3c',
      solution:[
        'Set up: det(A − λI) = 0',
        'det([[5−λ, −2],[3, −λ]]) = (5−λ)(−λ) − (−2)(3)',
        'Expand: −5λ + λ² + 6 = λ² − 5λ + 6',
        'Factor: (λ − 2)(λ − 3) = 0',
        'Eigenvalues: λ = 2 and λ = 3'
      ],
      hint1:'Solve det(A − λI) = 0 for the characteristic polynomial.',
      hint2:'λ² − 5λ + 6 = (λ−2)(λ−3) = 0 gives λ = 2 and λ = 3.',
      check(s) { return _int(s,2) && _int(s,3); }
    },

    /* — Polynomial Theory 79–84 — */
    {
      id:79, topic:'Polynomial Theory',
      label:"Today's Hard Challenge", instruction:'List all possible rational roots of:',
      equation:'p(x) = x³ + x² − 3x − 2', color:'#e74c3c',
      solution:[
        'By the Rational Root Theorem, possible rational roots are ±p/q',
        'p divides the constant term |−2|: p ∈ {1, 2}',
        'q divides the leading coefficient 1: q ∈ {1}',
        'Possible rational roots: ±1/1 and ±2/1',
        'Answer: ±1 and ±2'
      ],
      hint1:'Possible rational roots = ±(factors of constant) / (factors of leading coeff).',
      hint2:'Constant term = −2 (factors: 1, 2); leading coeff = 1; so ±1, ±2.',
      check(s) { return _int(s,1) && _int(s,-1) && _int(s,2) && _int(s,-2); }
    },

    {
      id:80, topic:'Polynomial Theory',
      label:"Today's Hard Challenge", instruction:'Find all real roots of:',
      equation:'f(x) = x³ + 2x² − 5x − 6', color:'#e74c3c',
      solution:[
        'Test rational roots; try x = 2: 8 + 8 − 10 − 6 = 0 ✓',
        'Factor out (x − 2): use synthetic division or polynomial long division',
        'f(x) = (x − 2)(x² + 4x + 3)',
        'Factor the quadratic: (x − 2)(x + 1)(x + 3)',
        'Roots: x = −3, x = −1, x = 2'
      ],
      hint1:'Test rational root candidates; x = 2 works.',
      hint2:'After factoring out (x−2), the quadratic x²+4x+3 = (x+1)(x+3).',
      check(s) { return _int(s,-3) && _int(s,-1) && _int(s,2); }
    },

    {
      id:81, topic:'Polynomial Theory',
      label:"Today's Hard Challenge", instruction:'Find all roots and their multiplicities:',
      equation:'p(x) = x⁴ − 8x³ + 24x² − 32x + 16', color:'#e74c3c',
      solution:[
        'Recognise this as a perfect fourth power: p(x) = (x − 2)⁴',
        'Verify: (x−2)⁴ = x⁴−8x³+24x²−32x+16 ✓',
        'The only root is where x − 2 = 0',
        'So x = 2 is a root',
        'Answer: x = 2 with multiplicity 4'
      ],
      hint1:'Try to recognise whether the polynomial is a perfect power of a binomial.',
      hint2:'(x−2)⁴ expands to x⁴−8x³+24x²−32x+16; root x=2, mult 4.',
      check(s) { return _int(s,2) && (s.includes('mult') || s.includes('4') || _int(s,4)); }
    },

    {
      id:82, topic:'Polynomial Theory',
      label:"Today's Hard Challenge", instruction:'Find all roots (real and complex):',
      equation:'x⁴ − 1 = 0', color:'#e74c3c',
      solution:[
        'Factor as a difference of squares: x⁴ − 1 = (x² − 1)(x² + 1)',
        'Factor further: (x − 1)(x + 1)(x² + 1) = 0',
        'Real roots: x = 1 and x = −1 from the first two factors',
        'Complex roots: x² + 1 = 0 → x² = −1 → x = ±i',
        'All four roots: x = 1, −1, i, −i'
      ],
      hint1:'Factor as a difference of squares twice.',
      hint2:'(x²−1)(x²+1) = (x−1)(x+1)(x−i)(x+i).',
      check(s) { return _int(s,1) && _int(s,-1) && s.includes('i') && s.includes('-i'); }
    },

    {
      id:83, topic:'Polynomial Theory',
      label:"Today's Hard Challenge", instruction:'Find all roots of:',
      equation:'x³ − 1 = 0  (cube roots of unity)', color:'#e74c3c',
      solution:[
        'Factor: x³ − 1 = (x − 1)(x² + x + 1)',
        'Real root: x = 1 from the first factor',
        'Complex roots: solve x² + x + 1 = 0 using the quadratic formula',
        'x = (−1 ± √(1−4))/2 = (−1 ± √(−3))/2 = (−1 ± i√3)/2',
        'Roots: 1, ω = (−1+i√3)/2, ω² = (−1−i√3)/2'
      ],
      hint1:'Factor x³−1 = (x−1)(x²+x+1). Apply the quadratic formula to x²+x+1=0.',
      hint2:'The complex cube roots are ω = e^(2πi/3) = (−1+i√3)/2 and its conjugate.',
      check(s) { return _int(s,1) && (s.includes('ω') || s.includes('omega') || s.includes('√3') || s.includes('sqrt(3)')); }
    },

    {
      id:84, topic:'Polynomial Theory',
      label:"Today's Hard Challenge", instruction:'Find all roots and their multiplicities:',
      equation:'p(x) = x³ − 3x − 2', color:'#e74c3c',
      solution:[
        'Test rational roots: p(−1) = −1 + 3 − 2 = 0 ✓; p(2) = 8 − 6 − 2 = 0 ✓',
        'Factor out (x + 1): use synthetic division to get (x+1)(x²−x−2)',
        'Factor the quadratic: (x + 1)(x − 2)(x + 1) = (x + 1)²(x − 2)',
        'So x = −1 is a double root and x = 2 is a simple root',
        'Answer: x = −1 (multiplicity 2) and x = 2 (multiplicity 1)'
      ],
      hint1:'Test x = −1 and x = 2 as roots. Once found, factor completely.',
      hint2:'p(x) = (x+1)²(x−2); root x = −1 has multiplicity 2, x = 2 has multiplicity 1.',
      check(s) { return _int(s,-1) && _int(s,2); }
    },

    /* — Advanced Calculus 85–90 — */
    {
      id:85, topic:'Advanced Calculus',
      label:"Today's Hard Challenge", instruction:'Evaluate:',
      equation:'lim_{n→∞}  n · sin(1/n)', color:'#e74c3c',
      solution:[
        'Substitute h = 1/n; as n → ∞, h → 0⁺',
        'Rewrite: lim_{h→0⁺} sin(h)/h',
        'This is the fundamental trigonometric limit',
        'Apply L\'Hôpital\'s rule (0/0 form): cos(h)/1',
        'lim_{h→0} cos(h) = 1; answer = 1'
      ],
      hint1:'Let h = 1/n and recognise the limit as lim_{h→0} sin(h)/h.',
      hint2:'lim_{h→0} sin(h)/h = 1 is a standard limit.',
      check(s) { return _int(s,1); }
    },

    {
      id:86, topic:'Advanced Calculus',
      label:"Today's Hard Challenge", instruction:'Find all critical points of:',
      equation:'f(x, y) = x³ − 3xy + y³', color:'#e74c3c',
      solution:[
        'Compute partial derivatives: ∂f/∂x = 3x² − 3y = 0 → y = x²',
        'Compute: ∂f/∂y = −3x + 3y² = 0 → x = y²',
        'Substitute y = x² into x = y²: x = x⁴ → x⁴ − x = 0 → x(x³ − 1) = 0',
        'Solutions: x = 0 (giving y = 0) and x = 1 (giving y = 1)',
        'Critical points: (0, 0) and (1, 1)'
      ],
      hint1:'Set both partial derivatives to zero and solve the resulting system.',
      hint2:'From ∂f/∂x = 0: y = x². From ∂f/∂y = 0: x = y². Substitute to get x = x⁴.',
      check(s) {
        return (s.includes('(0,0)') || (s.includes('x=0') && s.includes('y=0'))) &&
               (s.includes('(1,1)') || (s.includes('x=1') && s.includes('y=1')));
      }
    },

    {
      id:87, topic:'Advanced Calculus',
      label:"Today's Hard Challenge", instruction:'Evaluate:',
      equation:'∫₀^∞  x · e^(−x²) dx', color:'#e74c3c',
      solution:[
        'Use substitution: let u = x², so du = 2x dx, meaning x dx = du/2',
        'Change limits: x = 0 → u = 0; x = ∞ → u = ∞',
        'Integral becomes: (1/2) ∫₀^∞ e^(−u) du',
        'Integrate: (1/2) [−e^(−u)]₀^∞ = (1/2)[0 − (−1)]',
        'Answer: 1/2'
      ],
      hint1:'Use the substitution u = x² to convert to a standard exponential integral.',
      hint2:'After substitution: (1/2) ∫₀^∞ e^(−u) du = 1/2.',
      check(s) { return _frac(s,1,2) || _approx(s,0.5); }
    },

    {
      id:88, topic:'Advanced Calculus',
      label:"Today's Hard Challenge", instruction:'Evaluate:',
      equation:'∫₀^(π/2)  2 sin(x) cos(x) dx', color:'#e74c3c',
      solution:[
        'Recognise the double-angle identity: 2 sin(x)cos(x) = sin(2x)',
        'Rewrite the integral: ∫₀^(π/2) sin(2x) dx',
        'Antiderivative: −cos(2x)/2',
        'Evaluate: [−cos(2x)/2]₀^(π/2) = −cos(π)/2 − (−cos(0)/2)',
        '= −(−1)/2 + 1/2 = 1/2 + 1/2 = 1'
      ],
      hint1:'Use the double-angle identity 2 sin(x)cos(x) = sin(2x).',
      hint2:'∫₀^(π/2) sin(2x) dx = [−cos(2x)/2]₀^(π/2) = 1.',
      check(s) { return _int(s,1); }
    },

    {
      id:89, topic:'Advanced Calculus',
      label:"Today's Hard Challenge", instruction:'Using Lagrange multipliers, find the maximum value of:',
      equation:'f(x, y) = x + y\nsubject to x² + y² = 64', color:'#e74c3c',
      solution:[
        'Set ∇f = λ∇g where g = x² + y² − 64',
        '(1, 1) = λ(2x, 2y) → x = y = 1/(2λ)',
        'Substitute into constraint: 2/(4λ²) = 64 → λ² = 1/128',
        'So λ = 1/(8√2) and x = y = 4√2',
        'Maximum value: x + y = 4√2 + 4√2 = 8√2'
      ],
      hint1:'Set ∇(x+y) = λ∇(x²+y²−64). The symmetry implies x = y.',
      hint2:'With x = y and x² + y² = 64: 2x² = 64, x = 4√2, so max = 8√2.',
      check(s) {
        return s.includes('8√2') || s.includes('8sqrt(2)') || s.includes('8sqrt2') ||
               _approx(s, 8*Math.sqrt(2), 0.1);
      }
    },

    {
      id:90, topic:'Advanced Calculus',
      label:"Today's Hard Challenge", instruction:'Evaluate the double integral:',
      equation:'∫₀⁵ ∫₀^(5−x)  2 dy dx', color:'#e74c3c',
      solution:[
        'Evaluate the inner integral first: ∫₀^(5−x) 2 dy = 2(5 − x)',
        'The outer integral becomes: ∫₀⁵ 2(5 − x) dx',
        'Expand: ∫₀⁵ (10 − 2x) dx',
        'Antiderivative: 10x − x²',
        'Evaluate: [10x − x²]₀⁵ = (50 − 25) − 0 = 25'
      ],
      hint1:'Evaluate the inner integral (treating x as a constant), then integrate over x.',
      hint2:'Inner integral = 2(5−x); outer integral = ∫₀⁵ 2(5−x) dx = 25.',
      check(s) { return _int(s,25); }
    },

  ]

};
