// 注册插件
ll.registerPlugin("LSE-SetPortal", "LSE SetPortal 折跃门传送点编辑", [1, 0, 0, Version.Release], {
    "Author": "odorajbotoj"
});

// 数据路径
const VERSION = "1.0.0-Rel";

mc.listen("onServerStarted", () => {
    // 注册指令
    const cmd = mc.newCommand("setportal", `${Format.Aqua}LSE SetPortal 折跃门传送点编辑${Format.Clear}`, PermType.GameMasters);

    // 添加参数
    cmd.mandatory("BlockPos", ParamType.BlockPos);
    cmd.mandatory("ExitPortal", ParamType.BlockPos);
    cmd.overload(["BlockPos", "ExitPortal"]);

    // 设置回调函数
    cmd.setCallback((_cmd, _ori, out, res) => {
        // 获取方块
        var block = mc.getBlock(res.BlockPos);
        if (block.type != "minecraft:end_gateway") {
            return out.error("选中的不是折跃门方块");
        }
        // 获取方块实体对象
        var block_entity = block.getBlockEntity();
        if (block_entity == null) {
            return out.error("获取方块实体对象失败");
        }
        // 设置NBT
        var nbt = block_entity.getNbt();
        var nbt_list = new NbtList([
            new NbtInt(res.ExitPortal.x),
            new NbtInt(res.ExitPortal.y),
            new NbtInt(res.ExitPortal.z)
        ]);
        nbt.setTag("ExitPortal", nbt_list);
        var ok = block_entity.setNbt(nbt);
        if (ok) {
            return out.success("设置成功");
        } else {
            return out.error("设置失败");
        }
    });
   
    // 安装指令
    cmd.setup();
});