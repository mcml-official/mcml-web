export default function Cauchyn() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-4">
          <h1 className="text-3xl font-bold">
            Multi-dimensional Cauchy random number generator
          </h1>
        </div>

        <section>
          <h3 className="mb-2 text-xl font-semibold">Introduction</h3>
          <p className="text-gray-700">
            A Matlab code to generate random numbers following multi-dimensional
            Cauchy distributions is provided here.
          </p>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h3 className="mb-2 text-xl font-semibold">Citation</h3>
          <p className="mb-2 text-gray-700">
            The following publication contains mathematical details of the
            method and the code, which should be cited whenever relevant.
          </p>
          <ul className="list-disc pl-5 text-gray-700">
            <li>
              J.-S. Lee, C. H. Park, and T. Ebrahimi, &quot;Theory and
              applications of hybrid simulated annealing,&quot; in{" "}
              <i>Handbook of Optimization</i>, I. Zelinka, V. Snasel, and A.
              Abraham (eds.), Springer, pp. 395-422, 2013
            </li>
          </ul>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h3 className="mb-2 text-xl font-semibold">Code</h3>

          <p className="mb-1 font-medium text-gray-700">cauchyn.m</p>
          <pre className="overflow-x-auto rounded-md bg-gray-50 p-4 text-sm">
            function [x, r] = cauchyn(t, y, T, m, n) % x - n-dimensional cauchy
            random numbers % r - norm of x % [t, y] - lookup table % T - Cauchy
            parameter % m - number of random numbers % n - random number
            dimension u = rand(m,1); c = find(y &lt; 0); if isempty(c) y1 = y;
            t1 = t; else y1 = y(c(size(c,1))+1:size(y,1),:); t1 =
            t(c(size(c,1))+1:size(t,1),:); end theta = interp1(y1, t1, u); r = T
            * tan(theta); x = randn(m,n); x = repmat(r, [1,size(x,2)]) .* x ./
            repmat(sqrt(sum(x .* x, 2)), [1,size(x, 2)]);
          </pre>

          <p className="mt-4 mb-1 font-medium text-gray-700">cauchyn_gen.m</p>
          <pre className="overflow-x-auto rounded-md bg-gray-50 p-4 text-sm">
            function [t,y] = cauchyn_gen(n, s) % n - dimension % s - size of
            lookup table [t,y] = ode45(@cauchyn_dydt, [pi/(2*s):pi/(2*s):pi/2],
            0, &apos;AbsTol&apos;, n);
          </pre>

          <p className="mt-4 mb-1 font-medium text-gray-700">cauchyn_dydt.m</p>
          <pre className="overflow-x-auto rounded-md bg-gray-50 p-4 text-sm">
            function dydt = cauchyn_dydt(t, y, n) dydt = sin(t)^(n-1);
          </pre>
        </section>

        <hr className="border-gray-200" />

        <section>
          <h3 className="mb-2 text-xl font-semibold">Usage</h3>
          <ol className="list-decimal space-y-2 pl-5 text-gray-700">
            <li>
              Determine the number of random numbers (m), their dimension (n),
              and the Cauchy parameter (T).
            </li>
            <li>
              Get the n-dimensional CDF lookup table having a size of s. s=20000
              is a reasonable choice.
              <br />
              <code className="rounded bg-gray-100 px-2 py-1 text-sm">
                [t, y] = cauchyn_gen(n, s)
              </code>
            </li>
            <li>
              Generate n-dimensional Cauchy random numbers x.
              <br />
              <code className="rounded bg-gray-100 px-2 py-1 text-sm">
                [x, r] = cauchyn(t, y, T, m, n)
              </code>
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
}
