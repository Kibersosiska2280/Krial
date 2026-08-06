import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow,
  TableFooter
} from "@/components/ui/table";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ShoppingBag, 
  Users, 
  RefreshCw, 
  Eye, 
  Search,
  Mail,
  Phone,
  Building2,
  FileText
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";

// Типы
type Order = {
  id: string;
  customer_name: string;
  phone: string;
  email: string;
  address: string;
  comment: string | null;
  total_amount: number;
  items: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    total: number;
    category?: string;
  }[];
  created_at: string;
};

type ContactRequest = {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
};

type B2BRequest = {
  id: string;
  companyName: string;
  inn: string;
  contactPerson: string;
  phone: string;
  email: string;
  message: string;
  serviceType: string;
  createdAt: string;
  status: string;
};

// Авторизация
const AdminAuth = ({ onLogin }: { onLogin: () => void }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "Qwerty123") {
      localStorage.setItem("isAdminAuthorized", "true");
      onLogin();
      toast({ title: "Авторизация успешна", description: "Добро пожаловать в панель администратора" });
    } else {
      setError(true);
      toast({ title: "Ошибка авторизации", description: "Неверный пароль", variant: "destructive" });
    }
  };

  return (
    <div className="container mx-auto px-4 flex items-center justify-center min-h-[80vh]">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Вход в панель администратора</CardTitle>
          <CardDescription>Введите пароль для доступа</CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent>
            <Input
              placeholder="Введите пароль"
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              className={error ? "border-destructive" : ""}
            />
            {error && <p className="text-sm text-destructive mt-2">Неверный пароль</p>}
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">Войти</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit", month: "2-digit", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  }).format(date);
};

// Заказы
const OrdersList = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchOrders = () => {
    setIsLoading(true);
    try {
      const saved = localStorage.getItem('mockOrders');
      setOrders(saved ? JSON.parse(saved) : []);
    } catch { setOrders([]); }
    setIsLoading(false);
  };

  useEffect(() => { fetchOrders(); }, []);

  const filtered = orders.filter((o) => {
    const q = searchQuery.toLowerCase();
    return o.customer_name?.toLowerCase().includes(q) || o.email?.toLowerCase().includes(q) || o.phone?.includes(q);
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-2">
          <h2 className="text-xl sm:text-2xl font-bold">Заказы</h2>
          <Badge variant="outline">{orders.length}</Badge>
        </div>
        <div className="flex space-x-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-initial">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Поиск..." className="w-full sm:w-[200px] pl-8" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          </div>
          <Button size="icon" variant="outline" onClick={fetchOrders}><RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} /></Button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-lg border border-dashed p-8 text-center">
          <ShoppingBag className="mx-auto h-10 w-10 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-semibold">Нет заказов</h3>
          <p className="mt-2 text-sm text-muted-foreground">{searchQuery ? "Ничего не найдено" : "На данный момент заказов нет"}</p>
        </div>
      ) : (
        <div className="rounded-md border overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Клиент</TableHead>
                <TableHead className="hidden sm:table-cell">Контакты</TableHead>
                <TableHead className="text-right">Сумма</TableHead>
                <TableHead className="hidden md:table-cell text-center">Дата</TableHead>
                <TableHead className="text-center">Детали</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-mono text-xs">{order.id.substring(0, 8)}...</TableCell>
                  <TableCell>{order.customer_name}</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <span className="text-xs block">{order.phone}</span>
                    <span className="text-xs text-muted-foreground">{order.email}</span>
                  </TableCell>
                  <TableCell className="text-right font-medium">{order.total_amount?.toLocaleString()} ₽</TableCell>
                  <TableCell className="hidden md:table-cell text-center text-xs">{formatDate(order.created_at)}</TableCell>
                  <TableCell className="text-center">
                    <Button size="sm" variant="outline" onClick={() => setSelectedOrder(order)}>
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <Dialog open={!!selectedOrder} onOpenChange={(open) => { if (!open) setSelectedOrder(null); }}>
        {selectedOrder && (
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Заказ #{selectedOrder.id.substring(0, 8)}</DialogTitle>
              <DialogDescription>{formatDate(selectedOrder.created_at)}</DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Клиент</h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between"><dt className="text-muted-foreground">Имя:</dt><dd>{selectedOrder.customer_name}</dd></div>
                  <div className="flex justify-between"><dt className="text-muted-foreground">Телефон:</dt><dd>{selectedOrder.phone}</dd></div>
                  <div className="flex justify-between"><dt className="text-muted-foreground">Email:</dt><dd>{selectedOrder.email}</dd></div>
                  <div className="flex justify-between"><dt className="text-muted-foreground">Адрес:</dt><dd>{selectedOrder.address}</dd></div>
                  {selectedOrder.comment && <div className="flex justify-between"><dt className="text-muted-foreground">Комментарий:</dt><dd>{selectedOrder.comment}</dd></div>}
                </dl>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Итого</h3>
                <div className="text-2xl font-bold text-accent">{selectedOrder.total_amount?.toLocaleString()} ₽</div>
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Товар</TableHead>
                  <TableHead className="text-right">Цена</TableHead>
                  <TableHead className="text-center">Кол-во</TableHead>
                  <TableHead className="text-right">Сумма</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {selectedOrder.items?.map((item, i) => (
                  <TableRow key={i}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell className="text-right">{item.price?.toLocaleString()} ₽</TableCell>
                    <TableCell className="text-center">{item.quantity}</TableCell>
                    <TableCell className="text-right font-medium">{item.total?.toLocaleString()} ₽</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Итого</TableCell>
                  <TableCell className="text-right">{selectedOrder.total_amount?.toLocaleString()} ₽</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

// Контактные заявки
const ContactRequestsList = () => {
  const [requests, setRequests] = useState<ContactRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState<ContactRequest | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const fetch = () => {
    setIsLoading(true);
    try {
      const saved = localStorage.getItem('mockContactRequests');
      setRequests(saved ? JSON.parse(saved) : []);
    } catch { setRequests([]); }
    setIsLoading(false);
  };

  useEffect(() => { fetch(); }, []);

  const filtered = requests.filter((r) => {
    const q = searchQuery.toLowerCase();
    return r.name?.toLowerCase().includes(q) || r.email?.toLowerCase().includes(q) || r.phone?.includes(q) || r.message?.toLowerCase().includes(q);
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-2">
          <h2 className="text-xl sm:text-2xl font-bold">Контактные заявки</h2>
          <Badge variant="outline">{requests.length}</Badge>
        </div>
        <div className="flex space-x-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-initial">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Поиск..." className="w-full sm:w-[200px] pl-8" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          </div>
          <Button size="icon" variant="outline" onClick={fetch}><RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} /></Button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-lg border border-dashed p-8 text-center">
          <Users className="mx-auto h-10 w-10 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-semibold">Нет заявок</h3>
          <p className="mt-2 text-sm text-muted-foreground">{searchQuery ? "Ничего не найдено" : "На данный момент заявок нет"}</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((req) => (
            <Card key={req.id} className="cursor-pointer hover:border-accent/50 transition-colors" onClick={() => setSelectedRequest(req)}>
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="font-medium">{req.name}</h4>
                    <p className="text-sm text-muted-foreground">{req.phone} • {req.email}</p>
                  </div>
                  <div className="text-xs text-muted-foreground">{formatDate(req.created_at)}</div>
                </div>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{req.message}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={!!selectedRequest} onOpenChange={(open) => { if (!open) setSelectedRequest(null); }}>
        {selectedRequest && (
          <DialogContent className="max-w-xl">
            <DialogHeader>
              <DialogTitle>Заявка от {selectedRequest.name}</DialogTitle>
              <DialogDescription>{formatDate(selectedRequest.created_at)}</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between"><dt className="text-muted-foreground">Телефон:</dt><dd>{selectedRequest.phone}</dd></div>
                <div className="flex justify-between"><dt className="text-muted-foreground">Email:</dt><dd>{selectedRequest.email}</dd></div>
              </dl>
              <div className="bg-secondary/30 p-4 rounded-md">
                <p className="whitespace-pre-line text-sm">{selectedRequest.message}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="outline" className="flex-1" asChild><a href={`mailto:${selectedRequest.email}`}><Mail className="mr-2 h-4 w-4" />Ответить</a></Button>
                <Button className="flex-1" asChild><a href={`tel:${selectedRequest.phone}`}><Phone className="mr-2 h-4 w-4" />Позвонить</a></Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

// B2B Заявки
const B2BRequestsList = () => {
  const [requests, setRequests] = useState<B2BRequest[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState<B2BRequest | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchRequests = () => {
    setIsLoading(true);
    try {
      const saved = localStorage.getItem('b2b_requests');
      setRequests(saved ? JSON.parse(saved) : []);
    } catch { setRequests([]); }
    setIsLoading(false);
  };

  useEffect(() => { fetchRequests(); }, []);

  const filtered = requests.filter((r) => {
    const q = searchQuery.toLowerCase();
    return r.companyName?.toLowerCase().includes(q) || r.contactPerson?.toLowerCase().includes(q) || r.phone?.includes(q) || r.email?.toLowerCase().includes(q);
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-2">
          <h2 className="text-xl sm:text-2xl font-bold">B2B Заявки</h2>
          <Badge variant="outline">{requests.length}</Badge>
        </div>
        <div className="flex space-x-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-initial">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Поиск..." className="w-full sm:w-[200px] pl-8" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          </div>
          <Button size="icon" variant="outline" onClick={fetchRequests}><RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} /></Button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-lg border border-dashed p-8 text-center">
          <Building2 className="mx-auto h-10 w-10 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-semibold">Нет B2B заявок</h3>
          <p className="mt-2 text-sm text-muted-foreground">{searchQuery ? "Ничего не найдено" : "На данный момент B2B заявок нет"}</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((req) => (
            <Card key={req.id} className="cursor-pointer hover:border-accent/50 transition-colors" onClick={() => setSelectedRequest(req)}>
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-accent" />
                      <h4 className="font-medium">{req.companyName}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{req.contactPerson} • {req.phone}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">{req.serviceType}</Badge>
                    <span className="text-xs text-muted-foreground">{formatDate(req.createdAt)}</span>
                  </div>
                </div>
                {req.message && <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{req.message}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={!!selectedRequest} onOpenChange={(open) => { if (!open) setSelectedRequest(null); }}>
        {selectedRequest && (
          <DialogContent className="max-w-xl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-accent" />
                {selectedRequest.companyName}
              </DialogTitle>
              <DialogDescription>{formatDate(selectedRequest.createdAt)} • {selectedRequest.serviceType}</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between"><dt className="text-muted-foreground">Компания:</dt><dd>{selectedRequest.companyName}</dd></div>
                {selectedRequest.inn && <div className="flex justify-between"><dt className="text-muted-foreground">ИНН:</dt><dd>{selectedRequest.inn}</dd></div>}
                <div className="flex justify-between"><dt className="text-muted-foreground">Контактное лицо:</dt><dd>{selectedRequest.contactPerson}</dd></div>
                <div className="flex justify-between"><dt className="text-muted-foreground">Телефон:</dt><dd>{selectedRequest.phone}</dd></div>
                <div className="flex justify-between"><dt className="text-muted-foreground">Email:</dt><dd>{selectedRequest.email}</dd></div>
                <div className="flex justify-between"><dt className="text-muted-foreground">Тип услуги:</dt><dd>{selectedRequest.serviceType}</dd></div>
              </dl>
              {selectedRequest.message && (
                <div>
                  <h4 className="text-sm font-medium mb-2">Сообщение:</h4>
                  <div className="bg-secondary/30 p-4 rounded-md">
                    <p className="whitespace-pre-line text-sm">{selectedRequest.message}</p>
                  </div>
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="outline" className="flex-1" asChild><a href={`mailto:${selectedRequest.email}`}><Mail className="mr-2 h-4 w-4" />Ответить</a></Button>
                <Button className="flex-1" asChild><a href={`tel:${selectedRequest.phone}`}><Phone className="mr-2 h-4 w-4" />Позвонить</a></Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

// Основной компонент
const Admin = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [orderCount, setOrderCount] = useState(0);
  const [contactCount, setContactCount] = useState(0);
  const [b2bCount, setB2bCount] = useState(0);
  const [totalSales, setTotalSales] = useState(0);
  
  useEffect(() => {
    const authStatus = localStorage.getItem("isAdminAuthorized");
    if (authStatus === "true") setIsAuthorized(true);
    loadStats();
  }, []);
  
  const loadStats = () => {
    try {
      const orders: Order[] = JSON.parse(localStorage.getItem('mockOrders') || '[]');
      setOrderCount(orders.length);
      setTotalSales(orders.reduce((sum, o) => sum + (o.total_amount || 0), 0));
      
      const contacts: ContactRequest[] = JSON.parse(localStorage.getItem('mockContactRequests') || '[]');
      setContactCount(contacts.length);
      
      const b2b: B2BRequest[] = JSON.parse(localStorage.getItem('b2b_requests') || '[]');
      setB2bCount(b2b.length);
    } catch (e) { console.error("Ошибка загрузки статистики:", e); }
  };

  if (!isAuthorized) return <div className="pt-24"><AdminAuth onLogin={() => setIsAuthorized(true)} /></div>;

  return (
    <div className="container mx-auto px-4 pt-24 pb-8 space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold">Панель администратора</h1>
        <Button variant="outline" onClick={() => { localStorage.removeItem("isAdminAuthorized"); setIsAuthorized(false); }}>
          Выйти
        </Button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 p-4">
            <CardTitle className="text-xs sm:text-sm font-medium">Заказы</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="text-xl sm:text-2xl font-bold">{orderCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 p-4">
            <CardTitle className="text-xs sm:text-sm font-medium">Продажи</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="text-xl sm:text-2xl font-bold">{totalSales.toLocaleString()} ₽</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 p-4">
            <CardTitle className="text-xs sm:text-sm font-medium">Заявки</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="text-xl sm:text-2xl font-bold">{contactCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 p-4">
            <CardTitle className="text-xs sm:text-sm font-medium">B2B</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="text-xl sm:text-2xl font-bold">{b2bCount}</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="orders" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="orders" className="text-xs sm:text-sm">Заказы</TabsTrigger>
          <TabsTrigger value="contacts" className="text-xs sm:text-sm">Заявки</TabsTrigger>
          <TabsTrigger value="b2b" className="text-xs sm:text-sm">B2B</TabsTrigger>
        </TabsList>
        <TabsContent value="orders" className="mt-6"><OrdersList /></TabsContent>
        <TabsContent value="contacts" className="mt-6"><ContactRequestsList /></TabsContent>
        <TabsContent value="b2b" className="mt-6"><B2BRequestsList /></TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;
